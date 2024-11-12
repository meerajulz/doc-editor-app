import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MATERIAL_IMPORTS } from '../../shared/material.imports';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-document-editor',
  standalone: true,
  imports: [...MATERIAL_IMPORTS, CommonModule, FormsModule],
  templateUrl: './document-editor.component.html',
  styleUrl: './document-editor.component.scss',
})
export class DocumentEditorComponent {
  @Input() document: any = { title: '', content: '' }; // Document data (create new or edit)
  @Input() isEditMode = false; // Flag to check if we're in edit mode
  @Output() save = new EventEmitter<any>(); // Emit the saved document

  constructor(
    private dialogRef: MatDialogRef<DocumentEditorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (data) {
      this.document = data.document;
      this.isEditMode = data.isEditMode;
    }
  }

  saveDocument() {
    this.save.emit(this.document);
    this.dialogRef.close();
  }
}

import {
  Component,
  EventEmitter,
  Inject,
  Input,
  Output,
  AfterViewInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MATERIAL_IMPORTS } from '../../shared/material.imports';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import Quill from 'quill';

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

  editor: any;

  constructor(
    private dialogRef: MatDialogRef<DocumentEditorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (data) {
      this.document = data.document;
      this.isEditMode = data.isEditMode;
    }
  }

  ngAfterViewInit() {
    // Initialize Quill editor after the view is initialized
    const quillOptions = {
      theme: 'snow',
      modules: {
        toolbar: [
          [{ header: '1' }, { header: '2' }, { font: [] }],
          [{ list: 'ordered' }, { list: 'bullet' }],
          ['bold', 'italic', 'underline'],
          [{ align: [] }],
          ['link'],
        ],
      },
    };
    this.editor = new Quill('#editor', quillOptions);

    // If editing an existing document, set the editor content
    if (this.isEditMode) {
      this.editor.root.innerHTML = this.document.content;
    }

    // Save content on editor change
    this.editor.on('text-change', () => {
      this.document.content = this.editor.root.innerHTML;
    });
  }

  saveDocument() {
    // Add timestamp on save
    const timestamp = new Date().toLocaleString();
    this.document.timestamp = timestamp;

    this.save.emit(this.document);
    this.dialogRef.close();
  }
}

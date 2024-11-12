import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MATERIAL_IMPORTS } from '../../shared/material.imports';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-document-list',
  standalone: true,
  imports: [...MATERIAL_IMPORTS, CommonModule],
  templateUrl: './document-list.component.html',
  styleUrl: './document-list.component.scss',
})
export class DocumentListComponent {
  @Input() documents: any[] = [];
  @Output() edit = new EventEmitter<any>();
  @Output() delete = new EventEmitter<any>();

  editDocument(doc: any) {
    this.edit.emit(doc);
  }

  deleteDocument(doc: any) {
    this.delete.emit(doc);
  }
}

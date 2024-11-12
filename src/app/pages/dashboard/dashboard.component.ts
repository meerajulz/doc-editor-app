import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MATERIAL_IMPORTS } from '../../shared/material.imports';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [...MATERIAL_IMPORTS, FormsModule, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  documents = [
    { title: 'Document 1' },
    { title: 'Document 2' },
    { title: 'Document 3' },
  ];

  ngOnInit() {
    console.log('Documents:', this.documents);
  }

  searchText = '';
  filteredDocuments = [...this.documents];

  constructor() {}

  filterDocuments() {}

  editDocument(doc: any) {
    // Logic to navigate to the document editor
  }

  deleteDocument(doc: any) {
    // Logic to delete the document
  }
  addNewDocument() {
    // Logic to navigate to the document editor
  }
  openSettings() {}
}

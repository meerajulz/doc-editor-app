import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MATERIAL_IMPORTS } from '../../shared/material.imports';
import { HeaderComponent } from '../../components/header/header.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { DocumentListComponent } from '../../components/document-list/document-list.component';
import { MatDialog } from '@angular/material/dialog';

import { FormsModule } from '@angular/forms';
import { DocumentEditorComponent } from '../document-editor/document-editor.component';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    ...MATERIAL_IMPORTS,
    FormsModule,
    CommonModule,
    HeaderComponent,
    SidebarComponent,
    DocumentListComponent,
    DocumentEditorComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  documents = [
    { title: 'Document 1', content: 'Content of Document 1' },
    { title: 'Document 2', content: 'Content of Document 2' },
    { title: 'Document 3', content: 'Content of Document 3' },
  ];

  selectedDocument: any = { title: '', content: '' };
  isEditMode = false;
  constructor(private dialog: MatDialog) {}

  ngOnInit() {
    console.log('Documents:', this.documents);
  }

  searchText = '';
  filteredDocuments = [...this.documents];

  filterDocuments() {}

  editDocument(doc: any) {
    const dialogRef = this.dialog.open(DocumentEditorComponent, {
      data: { document: doc, isEditMode: true },
    });

    dialogRef.componentInstance.save.subscribe((updatedDoc) => {
      this.saveDocument(updatedDoc);
    });
  }

  addNewDocument() {
    const dialogRef = this.dialog.open(DocumentEditorComponent, {
      data: { document: { title: '', content: '' }, isEditMode: false },
    });

    dialogRef.componentInstance.save.subscribe((newDoc) => {
      this.saveDocument(newDoc);
    });
  }

  saveDocument(doc: any) {
    // Save logic here (either create or update)
    console.log('Saving document:', doc);
    if (doc.title && doc.content) {
      const index = this.documents.findIndex((d) => d.title === doc.title);
      if (index === -1) {
        this.documents.push(doc); // Add new document
      } else {
        this.documents[index] = doc; // Update existing document
      }
    }
  }

  deleteDocument(doc: any) {
    // Logic to delete the document
    this.documents = this.documents.filter((d) => d !== doc);
  }

  openSettings() {}
}

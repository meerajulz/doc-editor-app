import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MATERIAL_IMPORTS } from '../../shared/material.imports';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [...MATERIAL_IMPORTS, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  @Output() addDocument = new EventEmitter<void>();
  @Output() openSettings = new EventEmitter<void>();

  addNewDocument() {
    this.addDocument.emit();
  }

  handleOpenSettings() {
    this.openSettings.emit();
  }
}

import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MATERIAL_IMPORTS } from './shared/material.imports';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterModule, ...MATERIAL_IMPORTS, FormsModule],
})
export class AppComponent {
  title = 'doc-editor-app';
}

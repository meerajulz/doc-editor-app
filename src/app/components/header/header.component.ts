import { Component } from '@angular/core';
import { MATERIAL_IMPORTS } from '../../shared/material.imports';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [...MATERIAL_IMPORTS],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}

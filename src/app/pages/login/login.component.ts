import { Component } from '@angular/core';
import { MATERIAL_IMPORTS } from '../../shared/material.imports';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LogoComponent } from 'src/app/components/logo/logo.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [...MATERIAL_IMPORTS, FormsModule, LogoComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onLogin() {
    // Simple validation for now
    if (this.email && this.password) {
      this.router.navigate(['/dashboard']);
      // Redirect to dashboard (for now, assume login is successful)
      this.router.navigate(['/dashboard']);
    } else {
      alert('Please enter email and password');
    }
  }
}

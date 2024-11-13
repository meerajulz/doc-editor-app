import { Component } from '@angular/core';
import { MATERIAL_IMPORTS } from '../../shared/material.imports';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LogoComponent } from 'src/app/components/logo/logo.component';

import { Auth } from '@angular/fire/auth';
import { AuthService } from '../../services/auth.service';

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

  constructor(
    private router: Router,
    public auth: Auth,
    private authService: AuthService
  ) {
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log('User is logged in:', user);
      } else {
        console.log('No user logged in.');
      }
    });
  }

  // Method to handle user sign-in using email and password
  login() {
    this.authService
      .signIn(this.email, this.password)
      .then((userCredential) => {
        console.log('Logged in successfully!', userCredential);
        this.router.navigate(['/dashboard']);
      })
      .catch((error) => {
        console.error('Login failed:', error);
      });
  }

  // Method to handle Google sign-in
  googleSignIn() {
    this.authService
      .signInWithGoogle()
      .then((userCredential) => {
        console.log('Google sign-in successful!', userCredential);
        this.router.navigate(['/dashboard']);
      })
      .catch((error) => {
        console.error('Google sign-in failed:', error);
      });
  }
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MATERIAL_IMPORTS } from './shared/material.imports';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';

//firebase
// Firebase Modular SDK imports

import { provideFirebaseApp, initializeApp } from '@angular/fire/app'; // New import for Firebase app initialization
import { provideAuth, getAuth } from '@angular/fire/auth';
import { environment } from './environments/environment';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AppComponent,
    LoginComponent,
    ...MATERIAL_IMPORTS,
    // Initialize Firebase with the environment config and modular API
    provideFirebaseApp(() => {
      console.log(
        'Initializing Firebase with config:',
        environment.firebaseConfig
      );
      return initializeApp(environment.firebaseConfig);
    }),
    provideAuth(() => {
      const auth = getAuth();
      console.log('Firebase Auth initialized:', auth);
      return auth;
    }),
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [],
})
export class AppModule {}

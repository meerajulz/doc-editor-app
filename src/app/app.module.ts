import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MATERIAL_IMPORTS } from './shared/material.imports';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AppComponent,
    ...MATERIAL_IMPORTS,
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [],
})
export class AppModule {}

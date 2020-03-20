import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule, MatCardModule, MatButtonModule, MatToolbarModule, MatRadioModule, MatInputModule, MatProgressSpinnerModule } from '@angular/material';
import { EncuestaComponent } from './components/encuesta/encuesta.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContestadasComponent } from './components/contestadas/contestadas.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EncuestaComponent,
    ContestadasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatRadioModule,
    MatInputModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

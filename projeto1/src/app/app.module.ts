import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EventPropertyComponent } from './event-property/event-property.component';

import {  MatInputModule  } from '@angular/material/input';
import {  MatCardModule } from '@angular/material/card';
import {  MatFormFieldModule  } from '@angular/material/form-field';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EventPropertyComponent,
    TwoWayDataBindingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

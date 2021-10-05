import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { HomeComponent } from './home/home.component';
import { FormNativeValidationComponent } from './form-native-validation/form-native-validation.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { FormControlComponent } from './form-control/form-control.component';
import { FormGroupComponent } from './form-group/form-group.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';


@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenFormComponent,
    HomeComponent,
    FormNativeValidationComponent,
    FormValidationComponent,
    FormControlComponent,
    FormGroupComponent,
    FormBuilderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'},
  ],  bootstrap: [AppComponent]
})
export class AppModule { }

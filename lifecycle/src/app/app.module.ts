import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainLifeCycleComponent } from './main-life-cycle/main-life-cycle.component';
import { LifecycleChildComponent } from './main-life-cycle/lifecycle-child/lifecycle-child.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLifeCycleComponent,
    LifecycleChildComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

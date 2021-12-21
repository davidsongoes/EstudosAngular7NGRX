import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EletronicsRoutingModule } from './eletronics-routing.module';
import { EletronicListComponent } from './eletronic-list/eletronic-list.component';
import { EletronicsDetailComponent } from './eletronic-list/eletronics-detail/eletronics-detail.component';


@NgModule({
  declarations: [
    EletronicListComponent,
    EletronicsDetailComponent
  ],
  imports: [
    CommonModule,
    EletronicsRoutingModule
  ]
})
export class EletronicsModule { }

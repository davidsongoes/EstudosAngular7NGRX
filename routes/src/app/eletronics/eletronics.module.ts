import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EletronicsRoutingModule } from './eletronics-routing.module';
import { EletronicListComponent } from './eletronic-list/eletronic-list.component';
import { EletronicsDetailComponent } from './eletronic-list/eletronics-detail/eletronics-detail.component';
import { MaterialModule } from '../modules/material/material.module';

@NgModule({
  declarations: [EletronicListComponent, EletronicsDetailComponent],
  imports: [CommonModule, EletronicsRoutingModule, MaterialModule],
})
export class EletronicsModule {}

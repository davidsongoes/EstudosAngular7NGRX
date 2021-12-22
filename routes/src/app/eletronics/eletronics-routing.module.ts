import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EletronicListComponent } from './eletronic-list/eletronic-list.component';
import { EletronicsDetailComponent } from './eletronic-list/eletronics-detail/eletronics-detail.component';

const routes: Routes = [
  { path: 'eletronics', component: EletronicListComponent },
  { path: 'eletronics/:index', component: EletronicsDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EletronicsRoutingModule {}

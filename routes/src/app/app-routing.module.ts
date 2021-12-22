import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DvdComponent } from './dvd/dvd.component';
import { BookComponent } from './book/book.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DvdDetailComponent } from './dvd/dvd-detail/dvd-detail.component';
import { DvdEditComponent } from './dvd/dvd-edit/dvd-edit.component';
import { BookDetailComponent } from './book/book-detail/book-detail.component';
import { BookAuthorsComponent } from './book/book-authors/book-authors.component';
import { EletronicsModule } from './eletronics/eletronics.module';

const appRoutes: Routes = [
  { path: 'dvds', component: DvdComponent },
  {
    path: 'books',
    component: BookComponent,
    children: [
      {
        path: ':index',
        component: BookDetailComponent,
        children: [{ path: 'authors', component: BookAuthorsComponent }],
      },
    ],
  },
  {
    path: 'eletronics',
    loadChildren: () =>
      import('./eletronics/eletronics.module').then((m) => m.EletronicsModule),
  },
  { path: 'dvds/add', component: DvdEditComponent },
  { path: 'dvds/:index', component: DvdDetailComponent },
  { path: '', pathMatch: 'full', redirectTo: 'dvds' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './components/book-list/book-list.component';
import { SharedModule } from '../shared/shared.module';
import { BookEditComponent } from './components/book-edit/book-edit.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'book-list', pathMatch:"full"},
  {path: 'book-list', component: BookListComponent},
  {path: 'book-edit/:id', component: BookEditComponent}
]


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BookListComponent, BookEditComponent],
  exports: [BookListComponent]
})
export class BookModule { }

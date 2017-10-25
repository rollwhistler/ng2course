import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './components/book-list/book-list.component';
import { SharedModule } from '../shared/shared.module';
import { BookEditComponent } from './components/book-edit/book-edit.component';
import { RouterModule, Routes } from '@angular/cli';

const routes: Routes = [
  {path: '', redirectoTo: 'book-list', pathMatch: "full"},
  {path: 'book-list', component: BookListComponent},
  {path: 'book-edit/:id', component: BookEditComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [BookListComponent, BookEditComponent],
  exports: [BookListComponent]
})
export class BookModule { }

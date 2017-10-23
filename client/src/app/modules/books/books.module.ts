import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BooksListComponent } from './components/books-list/books-list.component';
import { SharedModule } from '../shared/shared.module';
import { BookEditComponent } from './components/book-edit/book-edit.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: '', component: BooksListComponent }
    ])
  ],
  declarations: [BooksListComponent, BookEditComponent]
})
export class BooksModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './components/book-list/book-list.component';
import { SharedModule } from '../shared/shared.module';
import { BookEditComponent } from './components/book-edit/book-edit.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [BookListComponent, BookEditComponent],
  exports: [BookListComponent]
})
export class BookModule { }

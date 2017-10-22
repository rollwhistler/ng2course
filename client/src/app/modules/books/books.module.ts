import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BooksListComponent } from './books-list/books-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: '', component: BooksListComponent }
    ])
  ],
  declarations: [BooksListComponent]
})
export class BooksModule { }

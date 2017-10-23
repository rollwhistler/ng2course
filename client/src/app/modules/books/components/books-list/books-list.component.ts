import { Component, OnInit } from '@angular/core';
import { ListItem } from '../../../shared/models/list-item';
import { SimpleService } from '../../../shared/services/simple.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
  public books: ListItem[];

  constructor(public simpleService: SimpleService, public router: Router) {
    this.books = this.simpleService.getAll();
  }

  ngOnInit() {
  }

  edit(item: ListItem) {
    this.router.navigate(['book-edit', item.id]);
  }
}

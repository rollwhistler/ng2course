import { Component, OnInit } from '@angular/core';
import { ListItem } from '../../../shared/models/item';
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  public books: ListItem[];
  constructor() { 
    this.books = [{
      id: 1,
      name: "Cincuenta sombras de grey"
    }]
  }

  ngOnInit() {
  }

}

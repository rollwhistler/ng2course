import { Component, OnInit } from '@angular/core';
import { ListItem } from '../../shared/models/list-item';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
  books: ListItem[];

  constructor() {
    this.books = [
      {
        id: 1,
        name: "Juego de Tronos"
      }, {
        id: 2,
        name: "Choque de Reyes"
      }, {
        id: 3,
        name: "Tormenta de espadas"
      }, {
        id: 4,
        name: "Festín de cuervos"
      }, {
        id: 5,
        name: "Danza de dragones"
      }
    ]
  }

  ngOnInit() {
  }

}

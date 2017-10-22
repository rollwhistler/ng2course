import { Component, OnInit } from '@angular/core';
import { ListItem } from '../../../shared/models/list-item';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  public users: ListItem[];

  constructor() {
    this.users = [
      {
        id: 1,
        name: "Mariano Rajoy"
      }, {
        id: 2,
        name: "Albert Rivera"
      }, {
        id: 3,
        name: "Pedro Sánchez"
      }, {
        id: 4,
        name: "Pablo Iglesias"
      }, {
        id: 5,
        name: "Gabrial Rufián"
      }
    ]
  }

  ngOnInit() {
  }

}

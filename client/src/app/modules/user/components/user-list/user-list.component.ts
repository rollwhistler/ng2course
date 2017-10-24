import { Component, OnInit } from '@angular/core';
import { ListItem } from '../../../shared/models/item';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  public users: ListItem[];

  constructor() {
    this.users = [{
      id: 1,
      name: "Primo de Rivera"
    }]
   }

  ngOnInit() {  
  }

}

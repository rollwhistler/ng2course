import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

  users: User[] = [];

  constructor() { }

  ngOnInit() {
  }

  addUser(username) {
    let user = {
      id: this.getNextUserId(),
      name: username
    }
    this.users = this.users.concat([user]);
  }

  removeUser(index) {
    this.users.splice(index, 1);
    this.users = this.users.concat([]);
  }

  getNextUserId() {
    let maxId = 1;
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].id >= maxId) {
        maxId = this.users[i].id + 1;
      }
    }
    return maxId;
  }

  setAllJordi() {

    let newUsers = [];
    for (let i = 0; i < this.users.length; i++) {
      newUsers.push({
        id: this.users[i].id,
        name: "Jordi"
      });
    }
    this.users = newUsers;

  }

}

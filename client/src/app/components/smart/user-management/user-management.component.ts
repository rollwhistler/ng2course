import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

  users: string[] = [];

  constructor() { }

  ngOnInit() {
  }

  addUser(username) {
    this.users.push(username);
  }

  removeUser(index) {
    this.users.splice(index, 1);
  }

}

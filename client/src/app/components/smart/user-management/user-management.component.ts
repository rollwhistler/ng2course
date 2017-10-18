import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

  users: string[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.users = this.userService.get();
  }

  addUser(username) {
    this.users.push(username);
    this.userService.set(this.users);
  }

  removeUser(index) {
    this.users.splice(index, 1);
    this.userService.set(this.users);
  }

}

import { Component, OnInit } from '@angular/core';
import { User, UserRole, UserRoleFactory } from '../../models/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  public roles: UserRole[] = new UserRoleFactory().getDefaultRoles();
  public model: UserRole;

  constructor() {
    this.model = new User();
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.model);
  }

}

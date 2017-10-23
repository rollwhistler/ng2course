import { Component, OnInit } from '@angular/core';
import { User, UserRole, UserRoleFactory } from '../../models/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  public model: User = {
    name: '',
    lastname: '',
    roleId: null
  }
  public userRoles: UserRole[] = new UserRoleFactory().getDefaultUserRoles();

  constructor() { 

  }

  submit(form) {
    console.log(form);
  }

  ngOnInit() {
  }

}

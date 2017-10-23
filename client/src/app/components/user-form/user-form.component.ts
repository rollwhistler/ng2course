import { Component, OnInit } from '@angular/core';
import { User, UserRole, UserRoleFactory, forbiddenNameValidator } from '../../models/user';
import { FormGroup, FormControl, Validator, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  public userForm: FormGroup; 
  public userRoles: UserRole[] = new UserRoleFactory().getDefaultUserRoles();
  public user: User;

  constructor(public fb: FormBuilder) { 
    this.user = {
      name: 'Ramon',
      lastname: 'Smith',
      roleId: 3,
      addresses: [{
        street: 'Rosselló',
        zipcode: '08034'
      }]
    }

    this.createForm();
  }

  createForm() {
    
  };

  submit(form) {
    console.log(form);
  }

  ngOnInit() {
  }


}

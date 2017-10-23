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
    this.userForm = this.fb.group({
      name: this.fb.control(this.user.name, [Validators.required, forbiddenNameValidator(/Jordi/i)]),
      lastname: this.fb.control(this.user.lastname, Validators.required),
      roleId: this.fb.control(this.user.roleId, Validators.required),
      addresses: this.fb.array(this.user.addresses.map((address) => {
        return this.fb.group({
          street: this.fb.control(address.street),
          zipcode: this.fb.control(address.zipcode)
        })
      }))
    });
  };

  get name(){
    return this.userForm.get('name');
  }

  get lastname(){
    return this.userForm.get('lastname');
  }

  get roleId(){
    return this.userForm.get('roleId');
  }

  get addresses(){
    return this.userForm.get('addresses');
  }

  submit(form) {
    console.log(form);
  }

  ngOnInit() {
  }


}

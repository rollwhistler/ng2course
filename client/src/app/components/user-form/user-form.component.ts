import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User, UserRole, UserRoleFactory } from '../../models/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  public roles: UserRole[] = new UserRoleFactory().getDefaultRoles();
  public userForm: FormGroup; /*= new FormGroup({
    name: new FormControl(),
    lastname: new FormControl(),
    roleId: new FormControl()

  });*/

  constructor(public fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      roleId: ['', Validators.required]
    })
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.userForm);
  }

}

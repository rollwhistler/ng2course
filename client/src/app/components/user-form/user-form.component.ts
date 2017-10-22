import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormArray, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User, UserRole, UserRoleFactory, forbiddenNameValidator } from '../../models/user';

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
  public initialValue = {
    name: 'Jonathan',
    lastname: 'Rodriguez',
    roleId: 1,
    addresses: [{
      street: 'c\ Rosselló 123',
      zipcode: '08666'
    }]
  }

  constructor(public fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.userForm = this.fb.group({
      name: ['', [
        Validators.required,
        forbiddenNameValidator(/Jordi/i)
      ]],
      lastname: ['', Validators.required],
      roleId: ['', Validators.required],
      addresses: this.fb.array([this.fb.group({
        street: '',
        zipcode: ''
      })])
    })

    this.userForm.valueChanges.subscribe((v) => {
      console.log("Form values have changed!")
      console.log(this.userForm.value);
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.userForm);
  }

  get name() {
    return this.userForm.get('name');
  }

  get lastname() {
    return this.userForm.get('lastname');
  }

  get roleId() {
    return this.userForm.get('roleId');
  }

  get addresses(): FormArray {
    return this.userForm.get('addresses') as FormArray;
  };

  prepopulate() {

    //Sets value only
    this.userForm.setValue(this.initialValue);
    //resets all form data and state, the sets values
    //this.userForm.reset(initialValue);
  }

  addAddress() {
    this.addresses.push(this.fb.group({ street: '', zipcode: '' }));
  }

  removeAddress(i) {
    this.addresses.removeAt(i);
  }

  forceName(name) {
    this.userForm.patchValue({ name });
  }

  reset() {
    this.userForm.reset();
  }

}

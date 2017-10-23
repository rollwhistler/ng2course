import { ValidatorFn, AbstractControl } from '@angular/forms';

export class User {
    name: string;
    lastname: string;
    roleId: number;
    addresses: Address[]
}

export class Address {
    street: string;
    zipcode: string;
}

export class UserRole {
    id: number;
    name: string;
}

export class UserRoleFactory {
    getDefaultUserRoles() {
        return [{
            id: 1,
            name: 'Admin'
        },{
            id: 2,
            name: 'Project Manager'
        },{
            id: 3,
            name: 'Mindundi'
        }]
        
    }
}

export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
      const forbidden = nameRe.test(control.value);
      return forbidden ? {'forbiddenName': {value: control.value}} : null;
    };
  }
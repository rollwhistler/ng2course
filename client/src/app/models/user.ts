import { ValidatorFn, AbstractControl } from '@angular/forms';

export class User {
  id: number;
  name: string;
  lastname: string;
  roleId: number;
}

export class UserRole {
  id: number;
  name: string;
}

export class UserRoleFactory {
  getDefaultRoles() {
    return [
      {
        id: 1,
        name: "Admin"
      }, {
        id: 2,
        name: "Project Manager"
      }, {
        id: 3,
        name: "Mindundi"
      }
    ]
  }
}

/** A hero's name can't match the given regular expression */
export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? { 'forbiddenName': { value: control.value } } : null;
  };
}

import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor() { }

  get(): string[] {
    let users = JSON.parse(window.localStorage.getItem("user-list"));
    if (!users) users = [];
    return users;
  }

  set(users: string[]) {
    window.localStorage.setItem("user-list", JSON.stringify(users));
  }
}

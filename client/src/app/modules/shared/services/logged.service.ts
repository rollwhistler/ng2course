import { Injectable } from '@angular/core';

@Injectable()
export class LoggedService {
  isLogged: boolean = false;
  constructor() { }

  set(b: boolean) {
    this.isLogged = b;
  }

  get(): boolean {
    return this.isLogged;
  }

}

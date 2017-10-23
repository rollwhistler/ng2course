import { Injectable } from '@angular/core';

@Injectable()
export class LogginService {

  isLogged: boolean = false;

  constructor() { }

  set(value: boolean) {
    this.isLogged = value;
  }

  get(): boolean {
    return this.isLogged;
  }
}

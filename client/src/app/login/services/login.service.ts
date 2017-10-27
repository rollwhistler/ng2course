import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
  isLogged: boolean = false;

  constructor() {
  }

  getLogged():boolean{
    return this.isLogged;
  }

  setLogged(b: boolean): void{
    this.isLogged = b;
  }

}

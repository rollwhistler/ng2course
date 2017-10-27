import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ErrorService } from '../../errors/services/error.service';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(public router: Router, public ls: LoginService, public es: ErrorService) {}
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    
    let isLoged = this.ls.getLogged();
    if(isLoged) return true;

    this.es.notify("You are not logged in!");
    this.router.navigate(['/login']);
    return false;
  }
}

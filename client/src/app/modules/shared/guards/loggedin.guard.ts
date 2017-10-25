import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LoggedService } from '../services/logged.service';
import { Router } from '@angular/router';

@Injectable()
export class LoggedinGuard implements CanActivate {

  constructor(public ls: LoggedService, public router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    
    console.log(next);

    console.log(state);
    let isLogged = this.ls.get();
    
    if(isLogged) return true;
    this.router.navigate(['/']);
    return false;
  }
}

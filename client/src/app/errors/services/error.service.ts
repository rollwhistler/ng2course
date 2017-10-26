import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ErrorService {
  public subject = new Subject<string>();

  constructor(private router: Router) { }

  notify(message) {
    this.subject.next(message);
  }

  handleError(err) {
    this.notify(err.message);
    if (err.status == 401) {
      this.router.navigate(['/login']);
    }
  }

  getErrors(): Observable<string> {
    return this.subject.asObservable();
  }
}

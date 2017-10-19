import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpResponse, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { CacheService } from '../services/cache.service';
import 'rxjs/Rx';

@Injectable()
export class LogInterceptor implements HttpInterceptor {
  constructor(public cache: CacheService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


    return next.handle(req);
  }
}

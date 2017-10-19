import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpResponse, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class LogInterceptor implements HttpInterceptor {
    constructor() {}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        console.log("Log Interceptor: "+req.url);
        
        return next.handle(req);
    }
}
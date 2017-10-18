import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpResponse, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { CacheService } from '../services/cache.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class CacheInterceptor implements HttpInterceptor {
    constructor(private cache: CacheService) {}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // Before doing anything, it's important to only cache GET requests.
        // Skip this interceptor if the request method isn't GET.
        if (req.method !== 'GET') {
            return next.handle(req);
        }

       // First, check the cache to see if this request exists.
       const cachedResponse = this.cache.get(req);
       if (cachedResponse) {
         // A cached response exists. Serve it instead of forwarding
         // the request to the next handler.
         return Observable.of(cachedResponse);
       }

       // No cached response exists. Go to the network, and cache
       // the response when it arrives.
       return next.handle(req).do(event => {
         // Remember, there may be other events besides just the response.
         if (event instanceof HttpResponse) {
             // Update the cache.
             this.cache.set(req, <HttpResponse<any>> event);
         }
       });
     }
   }
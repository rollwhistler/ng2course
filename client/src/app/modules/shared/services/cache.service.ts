import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse } from '@angular/common/http';

@Injectable()
export class CacheService {
  cachedRequests: {};

  constructor() { }

  get(req: HttpRequest<any>) {
    return this.cachedRequests[req.url];
  }

  set(req: HttpRequest<any>, resp: HttpResponse<any>) {
    this.cachedRequests[req.url] = resp;
  }
}

import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CacheService {

  objCache: any = {};
  expiracyTime: number = 5000;

  constructor() {
    this.objCache = JSON.parse(localStorage.getItem('cacheResponses'));
    console.log(this.objCache);
    if (!this.objCache) this.objCache = {};
  }

  get(url) {
    let cachedResponse = this.objCache[url];
    if (!cachedResponse
      || cachedResponse.timestamp < (new Date().getTime() - this.expiracyTime)) {
      return false;
    }

    return cachedResponse.response;
  }

  set(url: string, response: HttpResponse<any>) {
    this.objCache[url] = {
      timestamp: new Date().getTime(),
      response: response
    }
    console.log("Obj Cache: " + JSON.stringify(this.objCache));
    localStorage.setItem('cacheResponses', JSON.stringify(this.objCache));
  }
}

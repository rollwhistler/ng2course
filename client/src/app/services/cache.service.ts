import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

class CacheResponse {
  timestamp: number;
  response: HttpResponse<any>;
}

@Injectable()
export class CacheService {

  objCache: CacheResponse[] = [];
  expiracyTime: number = 3600000;

  constructor() { }

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
  }
}

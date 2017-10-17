import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SearchService {

  constructor(private http: HttpClient) { }

  search(term: string) {
    return this.http
      //.get('https://api.spotify.com/v1/search?q=' + term + '&type=artist');
      .get('https://jsonplaceholder.typicode.com/users/');
  }
}

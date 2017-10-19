import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

  constructor(public http: HttpClient) { }

  get(): Observable<Array<string>> {
    return <Observable<Array<string>>> this.http.get("https://ng2course-4e083.firebaseio.com/users.json");
  }

  set(users: string[]) {
    this.http.put("https://ng2course-4e083.firebaseio.com/users.json", users)
    .subscribe((res)=>{console.log(res)}, (e)=>console.log(e));
  }
}

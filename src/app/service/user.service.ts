import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { User } from '../model/user';

const url = 'http://prs.doudsystems.com/Users/';

@Injectable()
export class UserService {

  list(): Observable<User[]> {
    return this.http.get(url+"List") as Observable<User[]>;
  }

  get(id: string): Observable<User> {
    return this.http.get(url+"Get/"+id) as Observable<User>;
  }

  constructor(private http: HttpClient) {}

}
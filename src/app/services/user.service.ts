import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from '../models/user'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url: string ="https://jsonplaceholder.typicode.com/users/";

  constructor(private http: HttpClient) { }

  //get all users in API.
  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.url);
  }

  //given a user's id, get that users details.
  getUser(id:number): Observable<User>{
    return this.http.get<User>(`${this.url}${id}`);
  }
}

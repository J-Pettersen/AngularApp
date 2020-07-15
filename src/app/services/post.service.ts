import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


import { Post } from '../models/post'

@Injectable({
  providedIn: 'root'
})
export class PostService {
  
  public url: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPosts(id: number): Observable<Post[]>{
    return this.http.get<Post[]>(`${this.url}?userId=${id}`);
  }
}

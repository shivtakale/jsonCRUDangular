import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ipost } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
postBaseUrl = environment.postBaseUrl

  constructor(private _http:HttpClient) { }

  getAllPost():Observable<Ipost[]>{
    return this._http.get<Ipost[]>(this.postBaseUrl);
  }

  createPost(post:Ipost){
    return this._http.post<Ipost>(this.postBaseUrl, post)
  }

  deletePost(id:number){

  }

  updatePost(id:number, obj:Ipost): Observable<Ipost>{
  let singlePostUrl = `${this.postBaseUrl}/${id}`;
  return this._http.patch<Ipost>(singlePostUrl, obj);
  }

  getSinglePost(id:number): Observable<Ipost>{
    let singlePostUrl = `${this.postBaseUrl}/${id}`;
    return this._http.get<Ipost>(singlePostUrl)
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
//import 'rxjs/add/operator/catch';
import { catchError } from 'rxjs/operators';
import { observable, throwError } from 'rxjs';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { NotGetError } from '../common/not-get-error';
import { BadInputError } from '../common/bad-input-error';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPost(){
    return this.http.get(this.url).pipe(
      catchError((err: Response)=>{
        if(err.status === 200) {
          return throwError(()=>new NotGetError);
        }
        return throwError(()=> new AppError(err));
      })
    );
  }

  createPost(post: any){
    return this.http.post(this.url, JSON.stringify(post)).pipe(
      catchError((err: Response)=>{
        if(err.status === 400) {
          return throwError(()=>new BadInputError())
        }
        return throwError(()=>new AppError(err))
      })
    );
  }

  updatePost(post: any){
    return this.http.patch(this.url + '/' + post.id, { isRead: true });
  }

  deletePost(id: any){
    return this.http.delete(this.url + '/' + id).pipe(
      catchError((err: Response)=>{
        if(err.status == 404) {
          return throwError(()=> new NotFoundError());
        }
        return throwError(()=>new AppError(err));
      })
    );
  }
}//in catchError method we have an error because it is not a void method. Here we need an observable that has an error
//throw method will return an error that the type of it is sth specific to our application not the response object. So we
//need to create a class to represent our application errors. app-error.ts
//we need to change the implementaion of this error and check the status of error
//so if it is 404 we want to return a different kind of error

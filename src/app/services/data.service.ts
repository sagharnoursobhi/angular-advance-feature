import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError, lastValueFrom } from 'rxjs';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInputError } from '../common/bad-input-error';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient, @Inject(String) private url: string) { }

  private handledError(err: Response) {
    if(err.status == 404) {
      return throwError(()=> new NotFoundError());
    }
    if(err.status == 400) {
      return throwError(()=> new BadInputError(err));
    }
    return throwError(()=>new AppError(err));
  }

  getAll(){
    return this.http.get(this.url).pipe(
      catchError((err: Response)=>this.handledError(err)),
      map(response=>response)
    );
  }

  create(resource: any): Observable<any>{
    return new Observable(subscriber => {
      //subscriber.error(new AppError());
      this.http.post(this.url, resource).subscribe({
        next:(data)=>{
          subscriber.next(data);
          subscriber.complete();
        },
        error: (err: Response) => {
          if(err.status === 400) {
            subscriber.error(new BadInputError());
          }
          subscriber.error(new AppError());
          subscriber.complete();
        }
      })
    })
    /* return this.http.post(this.url, resource).pipe(
      catchError((err: Response)=>this.handledError(err)),
      map(response=>{console.log(response); return response; })
    ); */
  }

  update(resource: any){
    return this.http.patch(this.url + '/' + resource.id, { isRead: true });
  }

  delete(id: any): Observable<any>{
    return new Observable<any>(subscriber => {
      //subscriber.error(new AppError());

      this.http.delete(`${this.url}/${id}`).subscribe({
        next: (data) => {
          console.log(data)
          subscriber.next(data);
          subscriber.complete();
        },
        error: (err: Response)=> {
          console.log(err)
          if(err.status === 404) {
            subscriber.error(new NotFoundError());
          }
          subscriber.error(new AppError(err));
          subscriber.complete();
        }
      });
    })
  }
  /* return this.http.delete(`${this.url}/${id}`).pipe(
      map(response=>{console.log(response); return response}),
      catchError((err)=>this.handledError(err))
    ); */


}//in catchError method we have an error because it is not a void method. Here we need an observable that has an error
//throw method will return an error that the type of it is sth specific to our application not the response object. So we
//need to create a class to represent our application errors. app-error.ts
//we need to change the implementaion of this error and check the status of error
//so if it is 404 we want to return a different kind of error


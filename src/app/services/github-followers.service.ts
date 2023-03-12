import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppError } from '../common/app-error';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class GithubFollowersService extends DataService {

  constructor(http: HttpClient) {
    super(http, 'https://api.github.com/users/mosh-hamedani/followers');
  }

  /* constructor(private http: HttpClient) { }

  getFolllowersInfo(): Observable<any> {
    return new Observable(subscriber => {
      this.http.get(this.url).subscribe({
        next:(data)=>{
          subscriber.next(data);
          subscriber.complete();
        },
        error:(err: Response)=>{
          subscriber.error(new AppError(err));
          subscriber.complete();
        }
      })
    })
  } */
}

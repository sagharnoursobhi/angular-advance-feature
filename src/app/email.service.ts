import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})//when we want to inject dependencies inside services we use this decorator
export class EmailService {

  constructor() { }
}

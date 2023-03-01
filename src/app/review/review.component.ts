import { Component, OnInit } from '@angular/core';
import { ReviewService } from './review.service';

@Component({
  selector: "review",
  template: `
    <h2 class="text">Review Component</h2>
    <h3>{{ test }}</h3>
    <h3 [textContent]="test" [style.color]="isActive ? 'blue' : 'red'">This is test for style</h3>
    <ul>
      <li *ngFor="let name of listOfNames">{{ name }}</li>
    </ul>
    <h2 [class]="isActive ? 'test1' : 'test2' " class="mt-3"></h2>
    <button (click)="clickHandler()" class="mt-3">Review Btn</button>
    <div class="d-flex justify-content-evenly align-items-center mt-3">
      <input type="text" #family (KeyDown.enter)="keyUpHandler1(family.value)">
      <input type="text" (Keyup.enter)="keyUpHandler2($event)" >
      <input type="text" placeholder="Enter families" (keyup)="keyHandler3($event)">
      <h2 class="mt-3">{{ families }}</h2>
    </div>
    <div class="mt-3 p-2 ">
      <h2>Pipes in Angular: </h2>
      <div>{{ data.title | uppercase }}</div>
      <div>{{ data.students | number }}</div>
      <div>{{ data.price | currency:'AUD' }}</div><!-- maximum and minimum digit after decimal -->
      <div>{{ data.price | currency }}</div>
      <div>{{ data.releaseDate }}</div>
      <div>{{ data.rating | number:'1.1-1' }}</div>
    </div>
  `,
  styles: [`
      .text {
        color: red;
      }

      .test1 {
        color: green;
      }

      .test2 {
        color: blue;
      }
  `]
})

//we use pipes to format data there are some built in pipes and we can build customized pipes

export class ReviewComponent {
  test: string = "Test Review";
  isActive: boolean = true;
  listOfNames: string[];
  families: string = '';

  data = {
    title: 'The complete Angular course',
    rating: 5546.8878,
    students: 4554,
    price: 290.8765,
    releaseDate: new Date(2016, 3, 1)
  }

  constructor(names: ReviewService) {
    this.listOfNames = names.getNames();
  }

  keyUpHandler1($event: any) {
    console.log($event.target.value);
  }

  keyUpHandler2(family: any) {
    console.log(family);
  }

  keyHandler3(event: any) {
    this.families += event.target.value + " | "
  }

  clickHandler() {
    console.log("button clicked");
  }

  OnInIt() {

  }
}

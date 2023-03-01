//to make a plain class to convert it to a component we need to use a metadata that angular understands
import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

//we use this decorator function to tell angular how this component works
@Component({
  selector: 'courses',// css selectors( <courses> => courses, class= "courses" => .courses id="courses" => #courses)
  template: `
    <h2> {{ "Title: " + getTitle() }}</h2>
    <h2 [textContent]="title"></h2>
    <h2>{{ title }}</h2>
    <ul><li *ngFor="let course of courses">{{ course }}</li></ul>
    <img src="{{imgUrl}}" alt="">
    <img [src]="imgUrl" alt="">
    <button class="btn btn-primary">Click</button>
    <table>
      <tr>
        <td>first cell</td>
        <td [attr.colspan]="colSpan">second cell</td>
      </tr>
    </table>
  `//html markup
})//we say this class is decorated with component decorator
export class CoursesComponent {
  title: string = 'List of courses';
  courses: string[];
  imgUrl = "../assets/car1.png";
  colSpan = 2;

  constructor(service: CoursesService) {
    //let service = new CoursesService(); the problem is that if we want to extend the coursesServive and add an item we have to
    //come here and any other parts of application which we have used coursesService and add that item so we instatiate the service above as an argument
    //and unit testing will be more easier. this is called dependency injection and it must be added as provider
    //angular will create an instance of this module and this instance is used in any other components- Singelton Pattern
    //angular cli to create a service ng g s email(without.service)
    this.courses = service.getCourses();
  }

  getTitle() {
    return this.title;
  }
}


//There are 3 steps in using a component: 1- we should create it
//2- we should register in in a module => inside declarations in app.module
//3- finally we use this template inside app component
//INSTEAD OF USING ALL THESE TEDIOUS STEPS WE CAN USE THIS CLI : ng g c courses

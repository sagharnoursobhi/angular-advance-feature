import { Component } from "@angular/core";//component decorator
import { CoursesService } from "./courses.service";

@Component({
  selector: "<manual-courses>",
  template: `
    <h2>{{showMessage()}} </h2>
    <ul *ngFor="let course of courses">
      <li>{{course}}</li>
    </ul>
  `,
})
export class CoursesComponent {
  title = "These are courses";
  courses;
  constructor( service : CoursesService) {// injecting or providing classes inside a component
    /* let service = new CoursesService(); we will have to come back here change initializer every time so we use dependency instead above. After that we must register new provider inside module*/
    this.courses = service.getCourses();
   }
  showMessage(){
    return this.title
  }
}

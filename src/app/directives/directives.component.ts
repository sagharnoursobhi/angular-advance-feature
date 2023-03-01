import { Component } from '@angular/core';

@Component({
  selector: 'directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
  listOfNumbers:number[] = [1,2];

  viewMode = 'mode';//we need this field to keep track of the current mode

  listOfCourses = [
    { id: 1, course: 'course1' },
    { id: 2, course: 'course2' },
    { id: 3, course: 'course3' },
  ]

  numbers = [1,2,3,4,5];

  onAdd() {
    this.listOfCourses.push({ id: 4, course: 'course4'});
  }

  removeItem(course: any) {
    //return this.listOfCourses = this.listOfCourses.filter(item => course.course != item.course);
    let index = this.listOfCourses.indexOf(course);
    return this.listOfCourses.splice(index, 1);
  }

  listOfCoursesFromServer: any;

  loadFromServer() {
    this.listOfCoursesFromServer = [
      { id: 1, course: 'course1' },
      { id: 2, course: 'course2' },
      { id: 3, course: 'course3' },
    ];
  }

  isSelected: boolean = true;

  trackCourse(index:any, course:any) {
    return course ? course.id : undefined;
  }

  task = {
    title: 'Application',
    assignee: {
      name: 'John Smith'
    }
  }
}

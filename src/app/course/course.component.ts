import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {

  onClickButton($event:any) {
    $event.stopPropagation();
    console.log($event);
    console.log("Button was Clicked!");
  }

  //event bubbling=> event will bubble from down to up
  //to cancel it we use stopPropagation

  onClickDiv() {
    console.log("Div was clicked!")
  }

  onkeyUpHandler1($event: any) {
    console.log('Enter was pressed!');
    console.log($event.target.value);
  }

  //we can pass a variable and set value to it instead of using target
  onkeyUpHandler2(email: string) {
    console.log(email);
  }
}

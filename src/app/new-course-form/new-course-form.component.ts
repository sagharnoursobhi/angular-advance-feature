import { Component } from '@angular/core';
import { FormArray, FormGroup, FormControl, AbstractControl } from '@angular/forms';

@Component({
  selector: 'new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent {

  /* message: string = 'This value has already been added';
  repeated: boolean = false; */
  listOfTopics: string[] = [];

  form = new FormGroup({
    topics: new FormArray([])
  })

  addTopic(topic: HTMLInputElement) {
    (this.form.get('topics') as FormArray).push(new FormControl(topic.value));
    this.listOfTopics.push(topic.value);
    topic.value = '';
  }

  removeTopic(topic: AbstractControl) {
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }

  getControlsFromArray() {
    return this.topics.controls;
  }

  get topics() {
    return this.form.get('topics') as FormArray;
  }

  /* itemIsAddedBeforeOrNot(value: string): string | undefined {
    let repeatedItems = this.listOfTopics.filter(item => item == value);
    console.log('repeatedItems', repeatedItems)
    if(repeatedItems.length > 1) {
      this.repeated = true;
      return;
    } else return value;
  } */

}

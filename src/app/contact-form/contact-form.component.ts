import { Component } from '@angular/core';
import { ContactMethodType } from '../types/contactForm';


@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  contactMethods:ContactMethodType[] = [
    { id: 1, name:'Email' },
    { id: 2, name:'Phone' },
  ];

  log(firstName: any) {
    console.log(firstName);
    console.log(firstName.value)
  }

  logComment(comment: any) {
    console.log(comment.value);
  }

  submit(f: any) {
    console.log(f)
  }

}

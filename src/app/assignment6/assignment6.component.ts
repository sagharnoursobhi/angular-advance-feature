import { Component } from '@angular/core';
import { ContactMethodType } from '../types/contactForm';

@Component({
  selector: 'assignment6',
  templateUrl: './assignment6.component.html',
  styleUrls: ['./assignment6.component.css']
})
export class Assignment6Component {

  categoryItems:ContactMethodType[] = [
    { id: 1, name:'Development' },
    { id: 2, name:'Art' },
    { id: 3, name:'Languages' },
  ];


  onSubmitHandler(form: any) {
    console.log(form);
  }

}

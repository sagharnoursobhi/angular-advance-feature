import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'assignment5',
  templateUrl: './assignment5.component.html',
  styleUrls: ['./assignment5.component.css']
})
export class Assignment5Component {

  @Input('btnTitle') btnTitle: string | undefined;
  @Input('content') content: string | undefined;
  accListIsOpen: boolean = true;

  toggle() {
    this.accListIsOpen = !this.accListIsOpen;
  }

}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ng-oninit',
  template: '<h1>{{ initial }}</h1>',
  styleUrls: ['./lifecycle-hooks.component.css']
})
export class NgOnInit implements OnInit {

  @Input('initial') initial: string | undefined;
  counter: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.counter++;
  }

}

import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'lifecycle-hooks',
  templateUrl: './lifecycle-hooks.component.html',
  styleUrls: ['./lifecycle-hooks.component.css']
})
export class LifecycleHooksComponent implements OnChanges {

  @Input('data') data: string | undefined;
  counter: number = 0;

  ngOnChanges(): void {
    this.counter ++
  }

  constructor() { }

  ngOnInit(): void {
  }

}

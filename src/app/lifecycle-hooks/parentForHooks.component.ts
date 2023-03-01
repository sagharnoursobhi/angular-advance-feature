import { Component } from "@angular/core";


@Component({
  selector: 'parent-hook',
  template: `
  <lifecycle-hooks [data]="data"></lifecycle-hooks>
  <ng-oninit [initial]="initial"></ng-oninit>
  <ng-DoCheck></ng-DoCheck>
  `
})
export class ParentForHook {
  data: string = 'First Initial!';
  initial: string = "second Initial"

  constructor() {
    setTimeout(() => {
      this.data = "Using ngOnchanges Hook"
    }, 3000);
    setTimeout(() => {
      this.initial = "Using ngOnInit Hook"
    }, 5000);
  }
}

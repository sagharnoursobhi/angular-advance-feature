import { Component, DoCheck, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'ng-DoCheck',
  template: `<h1>Data: {{ data[data.length - 1]}}</h1>`,
  styleUrls: ['./lifecycle-hooks.component.css']
})
export class NgDoCheckCom implements DoCheck {

  lifecycleTicks: number = 0;
  oldTheData: string | undefined;
  data: string[] = ['initial']

  constructor(private changeDetector: ChangeDetectorRef) {
    this.changeDetector.detach();// class will create its own change detection

    setTimeout(() => {
      this.oldTheData = 'final'; // intentional error
      this.data.push('intermediate');
      console.log('first');
    }, 3000);

    setTimeout(() => {
      this.data.push('final');
      this.changeDetector.markForCheck();
      console.log('second');
    }, 6000);
  }

  ngDoCheck() {
    console.log(++this.lifecycleTicks);

    if (this.data[this.data.length - 1] !== this.oldTheData) {
      this.changeDetector.detectChanges();
    }
  }

}

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {

  currentBackground: string | undefined;
  @Input('isActive')isActive:boolean | undefined;
  @Input('likesCount')likesCount:number = 0;


  onClick() {
    this.likesCount += (this.isActive) ? -1 : +1;
    this.isActive = !this.isActive;
  }

}

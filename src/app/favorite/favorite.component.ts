import { Component, EventEmitter, Input, Output, ViewEncapsulation } from "@angular/core";

@Component({
  selector: 'favorite',
  template: `<div class="fav-container">
    <h1>First assignment</h1>
    <i class="bi mb-3 ms-3 star-style"
    [class.bi-star-fill]="isFavorite"
    [class.bi-star]="!isFavorite"
    (click)="clickOnStar()"
    ></i>
  </div>`,
  styleUrls:['./favorite.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})

export class FavoriteComponent {

  @Input('is-favorite') isFavorite: boolean | undefined;
  @Output('change') changeEvent = new EventEmitter();

  clickOnStar() {
    this.isFavorite = !this.isFavorite;
    this.changeEvent.emit({ newValue: this.isFavorite });
  }
}

export interface FavoriteChangedEventArgs {
  newValue: boolean
}

import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  constructor(private el: ElementRef) {}

  //in order to have one property binding for both reference and format attribute we can use aliase naming
  //@Input('appInputFormat') format: string | undefined;
  @Input('format') format: string | undefined;

  @HostListener('focus') onFocus() {
    console.log('on focus')
  }


  @HostListener('blur') onBlur() {
    console.log('on blur');
    let value: string = this.el.nativeElement.value;
    if(this.format === 'uppercase') {
      this.el.nativeElement.value = value.toUpperCase();
    } else
      this.el.nativeElement.value = value.toLowerCase();
  }
}

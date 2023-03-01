import { Component } from "@angular/core";

@Component({
  selector: 'Test',
  template: '<p>Test Component {{title}}</p>'
})
export class TestComponent {
  title = "Title";
}

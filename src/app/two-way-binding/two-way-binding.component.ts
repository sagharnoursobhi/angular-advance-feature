import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {

  email = 'saghar.hgh@gmail.com'

  keyUpFn() {
    console.log(this.email);
  }

  constructor() { }

  ngOnInit(): void {
  }

}

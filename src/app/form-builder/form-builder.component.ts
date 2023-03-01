import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent {

  form: FormGroup | undefined;

  constructor(fb: FormBuilder) {
    fb.group({
      name: ['', Validators.required],
      signup: fb.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
      }),
      topics: fb.array([])
    })
  }

}

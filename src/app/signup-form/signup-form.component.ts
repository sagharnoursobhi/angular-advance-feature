import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsernameValidators } from './username.validators';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  form = new FormGroup({
    account: new FormGroup({
      username: new FormControl('',[
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(10),
          UsernameValidators.canNotContainSpace,
        ],
        UsernameValidators.shouldBeUnique
      ),
      password: new FormControl('', Validators.required)
    }),
  });

  get username() {
    return this.form.get('account.username');
  }

  get password() {
    return this.form.get('account.password');
  }


  login() {
    console.log(this.form);
    this.form.setErrors({
      invalidLogin: true
    })
  }

  logControl(username: any) {
    console.log('username:', username)
  }
}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { PasswordValidators } from './password.validators';

@Component({
  selector: 'assignment8',
  templateUrl: './assignment8.component.html',
  styleUrls: ['./assignment8.component.css']
})
export class Assignment8Component {
  form!: FormGroup;//it is a way to tell the compiler that an expression has a value other than null or undefined
  newPassword: string | undefined;
  confirmPassword: string | undefined;
  newPassIsDisplayed:boolean = false;
  oldPassIsDisplayed:boolean = false;
  confirmPassIsDisplayed: boolean = false;


/*   form = new FormGroup({
    passwords: new FormGroup({
      newPass: new FormControl('', [
          Validators.required
        ],
      ),

      oldPass: new FormControl('', [
          Validators.required
        ],
        PasswordValidators.shouldBeCorrect
      ),

      confirmPass: new FormControl('', [
          Validators.required
        ],

      )
    }),

  }) */

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      oldPass: ['',
        Validators.required,
        PasswordValidators.validOldPassword
      ],
      newPass: ['', Validators.required ],
      confirmPass: ['', Validators.required],
    }, {
      validators: PasswordValidators.passwordsShouldMatch
    })
  }


  get oldPass() {
    return this.form.get('oldPass')
  }

  get newPass() {
    return this.form.get('newPass');
  }

  get confirmPass() {
    return this.form.get('confirmPass');
  }

  changePassword(form: any) {
    console.log(form)
  }

  changeNewPass(newPass: AbstractControl | null) {
    this.newPassword = newPass?.value;
  }

  changeConfirmPass(confirmPass: AbstractControl | null) {
    this.confirmPassword = confirmPass?.value;
  }
}

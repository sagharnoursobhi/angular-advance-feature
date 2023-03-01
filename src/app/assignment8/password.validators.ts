import { AbstractControl, ValidationErrors } from '@angular/forms';

export class PasswordValidators {

  static validOldPassword(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        if(control.value !== '1234') {
          resolve({invalidOldPassword: true})
        } else resolve(null)
      }, 3000)
    })
  }

  static passwordsShouldMatch(control: AbstractControl): ValidationErrors | null{
    let newPassword = control.get('newPass');
    let confirmPassword = control.get('confirmPass');

    if (newPassword !== confirmPassword) {
      return { passShouldMatch: true };
    } else
      return null;
  }//we wanna apply this validator at the form level so we need a reference to the new and confirm passwords
}

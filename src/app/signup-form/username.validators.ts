import { AbstractControl, ValidationErrors } from "@angular/forms";


export class UsernameValidators {

 static canNotContainSpace(control: AbstractControl): ValidationErrors | null  {
    if((control.value as string).indexOf(' ') >= 0 ) {
      return { canNotContainSpace: true }
    }
    return null;
    //instead of >=0 we can also use != -1
  }

  static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      setTimeout(()=>{
        if(control.value === 'mosh')
          resolve({ shouldBeUnique: true });
        else
          resolve(null);
      }, 2000);
    })
  }
}


/* we can also say for instance return { required: true } or for example { minlength: {
    requiredLength: 10,
    actualLength: control.value.length
}} */

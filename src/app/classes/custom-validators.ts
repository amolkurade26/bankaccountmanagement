import { AbstractControl } from "@angular/forms";

export class CustomValidators {
    static matchPassword(accForm:AbstractControl) : {} | null{
        const passvalue=accForm.get('password')!.value;
        console.log(passvalue);
        const confirmpassvalue=accForm.get('confirmPassword')!.value;
        console.log(confirmpassvalue);
  
        if(passvalue!=confirmpassvalue)
          return {'mismatch':true}
        else 
          return null;
    }
}

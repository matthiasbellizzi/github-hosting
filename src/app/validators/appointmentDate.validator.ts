import { AbstractControl, FormControl, ValidationErrors, ValidatorFn } from '@angular/forms';


export class appointmentDateValidator2 {
    static appointmentDateValidator(control: FormControl): ValidationErrors | null {
        let today : Date = new Date();
 
        if (new Date(control.value) < today)
            return { "appointmentDateInvalid": true };
 
        return null;
    }
 }
 
import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function ownerIdCardNumberValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
 
        const value: string = control.value;

        // length
        const lengthValid: boolean = value.length == 8;

        // check for letter
        const letterValid1: boolean = value[7] == 'A';
        const letterValid2: boolean = value[7] == 'M';
        const letterValid3: boolean = value[7] == 'L';

        const isValueValid: boolean = lengthValid && letterValid1 || letterValid2 || letterValid3;

        return !isValueValid ? {ownerIdCardNumberInvalid: true}: null;
    }
}
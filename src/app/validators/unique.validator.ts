import { AbstractControl, ValidatorFn } from '@angular/forms';

export function Unique(existingValues: string[]): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    return existingValues.includes(control.value) ? { notUnique: true } : null;
  }
}

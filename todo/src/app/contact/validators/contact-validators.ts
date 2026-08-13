import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

export class ContactValidators {
  static createInvalidDomainValidator(hosts: string[]): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value: string = control.value?.toLowerCase();
      if (!value) {
        return null;
      }

      const matches = hosts.some((host) => value.includes(host));

      return matches ? { invalidEmailDomain: true } : null;
    };
  }
}

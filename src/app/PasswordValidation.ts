import { AbstractControl } from '@angular/forms';

export function PasswordValidation(controls: AbstractControl) {
  const value = controls.value;
  const reg = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/, 'g');
  const valid = reg.test(value);
  if (valid) {
    return;
  }
  return {
    passwordValid: true
  };
}
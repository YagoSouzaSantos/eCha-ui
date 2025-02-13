import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';


export function createLoginForm(fb: FormBuilder): FormGroup {
  return fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(5)]]
  });
}

export function createRegisterForm(fb: FormBuilder): FormGroup {
  return fb.group(
    {
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      confirmPassword: ['', [Validators.required]],
      contactNumber: [''],
      authenticationMethodId: [1]
    },
    {
      validators: [matchPasswords('password', 'confirmPassword')],
    }
  );
}

export function matchPasswords(passwordField: string, confirmPasswordField: string): ValidatorFn {
  return (group: AbstractControl): ValidationErrors | null => {
    const password = group.get(passwordField)?.value;
    const confirmPassword = group.get(confirmPasswordField)?.value;

    if (password && confirmPassword && password !== confirmPassword) {
      return { passwordsMismatch: true };
    }

    return null;
  };
}

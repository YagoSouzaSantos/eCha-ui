import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export function createLoginForm(fb: FormBuilder): FormGroup {
  return fb.group({
    email: ['andre@gmail.com', [Validators.required, Validators.email]],
    password: ['21069090', [Validators.required, Validators.minLength(5)]]
  });
}

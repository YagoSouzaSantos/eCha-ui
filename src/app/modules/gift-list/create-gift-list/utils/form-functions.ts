import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export function creationForm(fb: FormBuilder): FormGroup {
  return fb.group({
    title: ['', [Validators.required]],
    message: [''],
    themeColor: ['', [Validators.required]],
    typography: [1,],
    photoUrl: [null],
    photo: [null],
  });
}

import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export function createNewGiftListForm(fb: FormBuilder): FormGroup {
  return fb.group({
    title: ['', [Validators.required]],
    themeColor: ['', [Validators.required]],
    // typography: [0, [Validators.required]],
    message: [''],
    // photoUrl: [''],
    // photo: ['']
  });
}

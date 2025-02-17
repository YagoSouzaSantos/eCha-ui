import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthenticationService } from "../../../../core/services/authentication.service";

export function creationForm(fb: FormBuilder, authService: AuthenticationService): FormGroup {
  const user = authService.getUser();
  return fb.group({
    userId: [user ? user.id : null],
    title: ['', [Validators.required]],
    description: [''],
    highlightColor: ['', [Validators.required]],
    fontId: [1],
    photoUrl: [null],
    image: [null],
  });
}

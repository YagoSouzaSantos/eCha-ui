import { Component, effect, EventEmitter, inject, input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Credentials } from '../../../../../../shared/interfaces/credentials';
import { SnackbarService } from '../../../../../../shared/services/snackbar.service';
import { FormValidation } from '../../../../../../shared/utils/form-validation';
import { createLoginForm } from '../../../../config/form-functions';
import { MATERIAL } from '../../../../config/imports';
import { AuthGoogleService } from '../../../../data-access/auth-google.service';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [MATERIAL, RouterLink],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {
  #authGoogleService = inject(AuthGoogleService);
  #snackbarService = inject(SnackbarService);
  #fb = inject(FormBuilder)

  loginStatus: boolean = false;
  loginForm!: FormGroup
  hide = true;

  @Output() login = new EventEmitter<Credentials>()

  ngOnInit(): void {
    this.loginForm = createLoginForm(this.#fb);
  }

  getErrorMessage(controlName: string): string {
    const control = this.loginForm.get(controlName);
    return FormValidation.getErrorMessage(control);
  }

  alert(): void {
    this.#snackbarService.showAlert('Método não implementado!');
  }

  onSubmit(event: Event) {
    event.preventDefault();
    const credentials: Credentials = this.loginForm.getRawValue();
    this.login.emit(credentials);
    this.loginStatus = !this.loginStatus;
  }

  onLoginWithOAuth2() {
    this.#authGoogleService.login()
  }



}

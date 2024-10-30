import { Component, effect, EventEmitter, inject, input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Credentials } from '../../../../../../shared/interfaces/credentials';
import { SnackbarService } from '../../../../../../shared/services/snackbar.service';
import { FormValidation } from '../../../../../../shared/utils/form-validation';
import { createLoginForm } from '../../../../config/form-functions';
import { MATERIAL } from '../../../../config/imports';
import { LoginStatus } from '../../../../data-access/login.service';
import { AuthGoogleService } from '../../../../data-access/auth-google.service';


@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [MATERIAL],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {

  loginStatus = input.required<LoginStatus>()
  loginForm!: FormGroup
  hide = true;
  #authGoogleService = inject(AuthGoogleService); // injeção serviço de autenticação
  #snackbarService = inject(SnackbarService);
  #fb = inject(FormBuilder)

  @Output() login = new EventEmitter<Credentials>()

  ngOnInit(): void {
    this.loginForm = createLoginForm(this.#fb);
 }

  constructor() {
    effect(() => {
      if(this.loginStatus() === 'error'){
        this.#snackbarService.showError('Não foi possível autenticar usuário.')
      }
    })
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
  }

  onLoginWithOAuth2() {
    this.#authGoogleService.login() // Autenticação consumindo o serviço do
  }



}

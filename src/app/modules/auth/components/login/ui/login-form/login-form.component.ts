import { Component, effect, EventEmitter, inject, input, Output, output } from '@angular/core';
import { MATERIAL } from '../../../../config/imports';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Credentials } from '../../../../../../shared/interfaces/credentials';
import { SnackbarService } from '../../../../../../shared/services/snackbar.service';
import { LoginStatus } from '../../../../data-access/login.service';
import { createLoginForm } from '../../../../config/login-form';
import { FormValidation } from '../../../../../../shared/utils/form-validation';


@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [MATERIAL],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {
  @Output() login = new EventEmitter<Credentials>()

  private snackbarService = inject(SnackbarService);
  private fb = inject(FormBuilder)

  loginStatus = input.required<LoginStatus>()
  loginForm!: FormGroup

  ngOnInit(): void {
    this.loginForm = createLoginForm(this.fb);
  }

  hide = true;
  loginFailed!: boolean;

  constructor() {
    effect(() => {
      if(this.loginStatus() === 'error'){
        this.snackbarService.showError('Não foi possível autenticar usuário.')
      }
    })
  }

  onSubmit(event: Event) {
    event.preventDefault();
    const credentials: Credentials = this.loginForm.getRawValue();
    this.login.emit(credentials);
  }

  getErrorMessage(controlName: string): string {
    const control = this.loginForm.get(controlName);
    return FormValidation.getErrorMessage(control);
  }

  alert(): void {
    this.snackbarService.showAlert('Método não implementado!');
  }
}

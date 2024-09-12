import { Component, effect, EventEmitter, inject, input, Output, output } from '@angular/core';
import { MATERIAL } from '../../../../config/imports';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Credentials } from '../../../../../../shared/interfaces/credentials';
import { SnackbarService } from '../../../../../../shared/services/snackbar.service';
import { LoginStatus } from '../../../../data-access/login.service';


@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [MATERIAL],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {
  loginStatus = input.required<LoginStatus>();
  @Output() login = new EventEmitter<Credentials>();
  private fb = inject(FormBuilder);

  private snackbarService = inject(SnackbarService);

  loginForm = this.fb.nonNullable.group({
    email: [''],
    password: [''],
  });

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
  alert(): void {
    this.snackbarService.showAlert('Método não implementado!');
  }
}

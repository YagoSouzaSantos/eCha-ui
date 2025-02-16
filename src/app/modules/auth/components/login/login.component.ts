import { Component, inject } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { Router } from '@angular/router';
import { ResponseAuth } from '../../../../core/interfaces/responses/response-auth';
import { ResponseError } from '../../../../core/interfaces/responses/response-error';
import { AuthenticationService } from '../../../../core/services/authentication.service';
import { LoginService } from '../../../../core/services/login.service';
import { SnackbarService } from '../../../../shared/services/snackbar.service';
import { DoLogin } from './../../../../core/interfaces/login';
import { LoginFormComponent } from "./ui/login-form/login-form.component";

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [LoginFormComponent, MatCard],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  #authenticationService = inject(AuthenticationService);
  #loginService = inject(LoginService);
  #router = inject(Router);
  #snackbarService = inject(SnackbarService);

  doLogin(loLogin: DoLogin) {
    this.#loginService.doLogin(loLogin).subscribe({
      next: (response) => this.processSuccess(response),
      error: () => this.#snackbarService.showSuccess('Não foi possível realizar login')
    });
  }

  private processSuccess(response: ResponseAuth): void {
    if (response) {
      this.#authenticationService.setTokensLocalStorage(response.token);
      this.#authenticationService.setUserByToken();
      this.#snackbarService.showSuccess('Bem-vindo ao eChá!');
      this.#router.navigate(['/home']);
    } else {
      this.#snackbarService.showError('Resposta inválida do servidor.');
    }
  }
}


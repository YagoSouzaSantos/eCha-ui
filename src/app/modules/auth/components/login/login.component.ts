import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { DoLogin } from './../../../../core/interfaces/login';
import { LoginFormComponent } from "./ui/login-form/login-form.component";
import { MatCard } from '@angular/material/card';
import { ResponseAuth } from '../../../../core/interfaces/responses/response-auth';
import { ResponseError } from '../../../../core/interfaces/responses/response-error';
import { AuthenticationService } from '../../../../core/services/authentication.service';
import { LoginService } from '../../../../core/services/login.service';
import { SnackbarService } from '../../../../shared/services/snackbar.service';



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
      error: (errorResponse) => this.processError(errorResponse)
    });
  }

  private processSuccess(response: ResponseAuth): void {
    if (response.tokens?.accessToken) {
      this.#authenticationService.setTokensLocalStorage(response.tokens.accessToken);
      this.#snackbarService.showSuccess('Login realizado com sucesso.');
      this.#router.navigate(['/home']);
    } else {
      this.#snackbarService.showError('Resposta inválida do servidor.');
    }
  }

  private processError(errorResponse: ResponseError): void {
    const errorMessage = errorResponse.errors?.[0];
    this.#snackbarService.showError(errorMessage);
  }

}


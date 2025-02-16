import { Component, inject } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { Router } from '@angular/router';
import { User } from '../../../../core/interfaces/user';
import { AuthenticationService } from '../../../../core/services/authentication.service';
import { RegisterService } from '../../../../core/services/register.service';
import { Register } from '../../../../shared/interfaces/register';
import { SnackbarService } from '../../../../shared/services/snackbar.service';
import { RegisterFormComponent } from "./ui/register-form/register-form.component";
import { LoginService } from '../../../../core/services/login.service';
import { DoLogin } from '../../../../core/interfaces/login';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [MatCard, RegisterFormComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  #authenticationService = inject(AuthenticationService);
  #snackbarService = inject(SnackbarService);
  #registerService = inject(RegisterService);
  #loginService = inject(LoginService);
  #router = inject(Router);

  onRegister(register: Register) {
    this.#registerService.createUser(register).subscribe({
      next: (response) => this.processSuccess({ email: response.email, password: response.password }),
      error: () => {
        this.#snackbarService.showError('Ocorreu um erro ao criar usuário');
      },
    });
  }

  processSuccess(doLogin: {email: string, password: string}) {
    this.#loginService.doLogin(doLogin).subscribe({
      next: (response) => {
        if (response) {
          this.#authenticationService.setTokensLocalStorage(response.token);
          this.#authenticationService.setUserByToken();
          this.#snackbarService.showSuccess('Bem-vindo ao eChá!');
          this.#router.navigate(['/creation']);
        } else {
          this.#snackbarService.showError('Resposta inválida do servidor.');
        }
      },
      error: () => this.#snackbarService.showError('Não foi possível realizar login')
    });
  }

}

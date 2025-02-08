import { Component, inject } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { RegisterService } from '../../../../core/services/register.service';
import { Register } from '../../../../shared/interfaces/register';
import { SnackbarService } from '../../../../shared/services/snackbar.service';
import { RegisterFormComponent } from "./ui/register-form/register-form.component";
import { AuthenticationService } from '../../../../core/services/authentication.service';
import { ResponseAuth } from '../../../../core/interfaces/responses/response-auth';
import { Router } from '@angular/router';
import { User } from '../../../../core/interfaces/user';


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
  #router = inject(Router);

  onRegister(register: Register) {
    this.#registerService.createUser(register).subscribe({
      next: (response) => this.processSuccess(response),
      error: () => {
        this.#snackbarService.showError('Ocorreu um erro ao criar usuário');
      },
    });
  }

  private processSuccess(response: User): void {
    if (response) {
      this.#authenticationService.setUserLocalStorage(response);
      this.#snackbarService.showSuccess('Cadastro realizado com sucesso.');
      this.#router.navigate(['/creation']);
    } else {
      this.#snackbarService.showError('Resposta inválida do servidor.');
    }
  }
}

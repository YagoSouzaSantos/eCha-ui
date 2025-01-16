import { Component, effect, Inject, inject } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { RegisterFormComponent } from "./ui/register-form/register-form.component";
import { Register } from '../../../../shared/interfaces/register';
import { RegisterService } from '../../../../core/services/register.service';
import { SnackbarService } from '../../../../shared/services/snackbar.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [MatCard, RegisterFormComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  #registerService = inject(RegisterService);
  #snackbarService = inject(SnackbarService);

  onRegister(register: Register) {
    this.#registerService.createUser(register).subscribe({
      next: (response: { status: number; }) => {
        if (response.status === 201) {
          this.#snackbarService.showSuccess('Usuário criado com sucesso!');
        }
      },
      error: (error: any) => {
        this.#snackbarService.showError('Ocorreu um erro ao criar usuário');
      },
    });
  }
}

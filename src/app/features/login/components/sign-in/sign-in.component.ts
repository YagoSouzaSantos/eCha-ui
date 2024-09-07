import { Router } from '@angular/router';
import { Component, inject } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { SnackbarService } from '../../../../shared/services/snackbar.service';
import { AuthGoogleService } from '../../services/auth-google.service';
import { MATERIAL } from '../imports/imports';
import { SimulationAuthService } from '../../../../../assets/simulation-services/simulation-auth.service';


@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [MATERIAL, FormsModule, ReactiveFormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {
  private authGoogleService = inject(AuthGoogleService);

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', Validators.required);
  hide = true;
  loginFailed!: boolean;

  loginWithGoogle() {
    this.authGoogleService.login();
  }

  constructor(
    private authService: SimulationAuthService,
    private snackbarService: SnackbarService,
    private router : Router
  ) { }

  onLogin() {
    const email = this.email.value!;
    const password = this.password.value!;

    if (this.email.valid && this.password.valid) {

      this.authService.login(email, password).subscribe({
        next: (user) => {
          this.snackbarService.showSuccess("Usuário autenticado com sucesso!");
          this.router.navigate(['/profile'])

        },
        error: (error) => {
          this.snackbarService.showError("E-mail ou senha incorretos.");

        }
      });
    }

  }

  alert(): void {
    this.snackbarService.showAlert('Método não implementado!');
  }


}


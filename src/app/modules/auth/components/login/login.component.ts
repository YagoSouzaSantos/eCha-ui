import { Component, effect, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';


import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { LoginFormComponent } from "./ui/login-form/login-form.component";

import { Credentials } from '../../../../shared/interfaces/credentials';
import { AuthGoogleService } from '../../data-access/auth-google.service';
import { LoginService } from '../../data-access/login.service';


@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [MatProgressSpinner, LoginFormComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private authGoogleService = inject(AuthGoogleService);

  public loginService = inject(LoginService);
  public authService = inject(AuthService);
  private router = inject(Router);

  constructor() {
    effect(() => {
      const user = this.authService.user()();
      console.log('user: ', user);
      if (user !== null && user !== undefined) {
        this.router.navigate(['profile']);
      }
    });
  }

  onLogin(credentials: Credentials) {
    this.loginService.authenticate(credentials);
  }
}


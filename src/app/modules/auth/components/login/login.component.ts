import { OAuthService } from 'angular-oauth2-oidc';
import { Component, effect, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';


import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { LoginFormComponent } from "./ui/login-form/login-form.component";

import { Credentials } from '../../../../shared/interfaces/credentials';
import { AuthGoogleService } from '../../data-access/auth-google.service';
import { LoginService } from '../../data-access/login.service';
import { MatCard } from '@angular/material/card';


@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [MatProgressSpinner, LoginFormComponent, MatCard],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  public loginService = inject(LoginService);
  public authService = inject(AuthService);
  private router = inject(Router);

  constructor() {
    effect(() => {
      const user = this.authService.user()();
      console.log('user: ', user);
      if (user !== null && user !== undefined) {
        this.router.navigate(['home']);
      }
    });
  }

  onLogin(credentials: Credentials) {
    this.loginService.authenticate(credentials);
  }

}


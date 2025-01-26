import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthGoogleService } from '../../modules/auth/data-access/auth-google.service';
import { LoginService } from '../../modules/auth/data-access/login.service';
import { Credentials } from '../../shared/interfaces/credentials';
import { AuthService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })
export class HomeGuardService {
  #authGoogleService = inject(AuthGoogleService);
  #loginService = inject(LoginService);

  canActivate(): void {
    const user = this.#authGoogleService.getProfile()

    const credentials: Credentials = {
      email: user?.['email'],
      password: user?.['name'],
    };
    this.#loginService.authenticate(credentials)

  }
}

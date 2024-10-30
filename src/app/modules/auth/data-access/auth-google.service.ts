import { SnackbarService } from './../../../shared/services/snackbar.service';
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';
import { environment } from '../../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthGoogleService {
  #oauthService = inject(OAuthService)
  #router = inject(Router)

  constructor() {
    this.initLogin();
  }

  initLogin() {

    if (typeof window !== 'undefined') {
      const config: AuthConfig = {
        issuer: 'https://accounts.google.com',
        strictDiscoveryDocumentValidation: false,
        clientId: environment.googleClientId,
        redirectUri: window.location.origin + '/home',
        scope: 'openid profile email',
      };

      this.#oauthService.configure(config);
      this.#oauthService.setupAutomaticSilentRefresh();
      this.#oauthService.loadDiscoveryDocumentAndTryLogin();
    }
  }

  login() {
    this.#oauthService.initLoginFlow();
  }

  logout() {
    this.#oauthService.logOut();
    this.#router.navigate(['auth/login'])
  }

  getProfile() {
    const claims = this.#oauthService.getIdentityClaims();
    return claims;
  }
}

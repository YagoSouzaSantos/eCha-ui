import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';


@Injectable({
  providedIn: 'root'
})
export class AuthGoogleService {

  private oauthService = inject(OAuthService);
  private router = inject(Router)

  constructor() {
    this.initLogin();
  }

  initLogin() {
    const config: AuthConfig = {
      issuer: 'https://accounts.google.com',
      strictDiscoveryDocumentValidation: false,
      clientId: '898090893485-h5ctlmbcrfb97nef6r2j988jlg0n1q85.apps.googleusercontent.com',
      redirectUri: window.location.origin + '/my-profile',
      scope: 'openid profile email',
    }

    this.oauthService.configure(config);
    this.oauthService.setupAutomaticSilentRefresh();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }

  login() {
    this.oauthService.initLoginFlow();
  }

  logout() {
    this.oauthService.logOut();
    this.router.navigate(['/authentication'])
  }

  getProfile() {
    return this.oauthService.getIdentityClaims();
  }
}

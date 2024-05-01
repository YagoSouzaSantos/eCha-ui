import { Component, OnInit, inject } from '@angular/core';
import { OAuthModule, OAuthService } from 'angular-oauth2-oidc';
import { MatButtonModule } from '@angular/material/button';
import { AuthGoogleService } from '../../service/auth-google.service';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

  private authGoogleService = inject(AuthGoogleService)

  loginWithGoogle() {
    this.authGoogleService.login();
  }

}

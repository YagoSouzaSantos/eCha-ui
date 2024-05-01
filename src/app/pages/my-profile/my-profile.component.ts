import { Component, OnInit, inject } from '@angular/core';

import { AuthGoogleService } from '../../core/authentication/service/auth-google.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent {
  
  
    private authGoogleService = inject(AuthGoogleService);
    private router = inject(Router)

  showData() {
    const data = JSON.stringify(this.authGoogleService.getProfile())

    console.log(data);
  }

  logOut() {
    this.authGoogleService.logout();
  }
}

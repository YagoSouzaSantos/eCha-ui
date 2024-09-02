import { Component, inject } from '@angular/core';


import { Router } from '@angular/router';
import { AuthGoogleService } from '../../features/login/services/auth-google.service';

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

import { Routes } from '@angular/router';
import { SignInComponent } from './features/login/components/sign-in/sign-in.component';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';
import { LoginComponent } from './features/login/login.component';
import { SignUpComponent } from './features/login/components/sign-up/sign-up.component';
import { AuthGuard } from './core/security/auth.guard';

import { LandingPageComponent } from './features/landing-page/landing-page.component';
import { HomeComponent } from './features/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'login',
    component: LoginComponent,
    children: [
      {
        path: '',
        component: SignInComponent
      },
      {
        path: 'sign-up',
        component: SignUpComponent
      }
    ]
  },
  { path: 'my-profile', component: MyProfileComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent }
];

import { Routes } from '@angular/router';
import { AuthGuard } from './core/security/auth.guard';
import { SignInComponent } from './features/login/components/sign-in/sign-in.component';
import { SignUpComponent } from './features/login/components/sign-up/sign-up.component';
import { LoginComponent } from './features/login/login.component';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';

import { GiftListComponent } from './features/gift-list/container/gift-list.component';
import { ProfileComponent } from './features/home/profile.component';
import { LandingPageComponent } from './features/landing-page/landing-page.component';

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
  {
    path: 'profile',
    component: ProfileComponent,
    children: [
      {
        path: '',
        component: GiftListComponent
      },
    ]
  },
  { path: 'my-profile', component: MyProfileComponent, canActivate: [AuthGuard] },
];

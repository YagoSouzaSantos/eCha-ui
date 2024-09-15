import { GiftListContainerComponent } from './modules/gift-list/gift-list-container/gift-list-container.component';
import { Routes } from '@angular/router';
import { isAuthenticatedGuard } from './core/security/auth.guard';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';

import { GiftListComponent } from './features/gift-list/container/gift-list.component';
import { ProfileComponent } from './features/home/profile.component';
import { LoginComponent } from './modules/auth/components/login/login.component';
import { LoginContainerComponent } from './modules/auth/container/login-container.component';
import { LandingPageComponent } from './modules/landing-page/landing-page.component';


export const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'auth',
    component: LoginContainerComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      }
    ]
  },
  {
    path: 'gift-list',
    component: GiftListContainerComponent,
    canActivate: [isAuthenticatedGuard()]
  },
  {
    path: 'profile',
    canActivate: [isAuthenticatedGuard()],
    component: ProfileComponent,
    children: [
      {
        path: '',
        component: GiftListComponent,
      },
    ]
  },
  { path: 'my-profile', component: MyProfileComponent},
];

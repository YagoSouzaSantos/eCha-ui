import { Routes } from '@angular/router';
import { GiftListContainerComponent } from './modules/gift-list/gift-list-container/gift-list-container.component';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';

import { LoginComponent } from './modules/auth/components/login/login.component';
import { LoginContainerComponent } from './modules/auth/container/login-container.component';
import { MyListsComponent } from './modules/gift-list/my-lists/my-lists.component';
import { LandingPageComponent } from './modules/landing-page/landing-page.component';
import { HomeComponent } from './modules/home/home.component';
import { isAuthenticatedGuard } from './core/security/auth.guard';
import { CreateGiftListComponent } from './modules/gift-list/create-gift-list/create-gift-list.component';


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
    path: 'home',
    component: HomeComponent,
    canActivate: [isAuthenticatedGuard()],
    children: [
      {
        path: '',
        component: MyListsComponent,
      },
    ]
  },
  {
    path: 'creation',
    component: CreateGiftListComponent,
    canActivate: [isAuthenticatedGuard()],

  },
  {
    path: 'nada',
    component: GiftListContainerComponent,
    // canActivate: [isAuthenticatedGuard()]
    children: [
      {
        path: '',
        component: MyListsComponent,
      },
    ]
  },
  { path: 'my-profile', component: MyProfileComponent },
];

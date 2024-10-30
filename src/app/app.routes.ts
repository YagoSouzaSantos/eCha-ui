import { Routes } from '@angular/router';
import { isAuthenticatedGuard } from './core/security/auth.guard';
import { LoginComponent } from './modules/auth/components/login/login.component';
import { LoginContainerComponent } from './modules/auth/container/login-container.component';
import { CreateGiftListComponent } from './modules/gift-list/create-gift-list/create-gift-list.component';
import { MyListsComponent } from './modules/gift-list/my-lists/my-lists.component';
import { HomeComponent } from './modules/home/home.component';
import { LandingPageComponent } from './modules/landing-page/landing-page.component';
import { HomeGuardService } from './core/security/home-user.guard';

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
    canActivate: [HomeGuardService],
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
];

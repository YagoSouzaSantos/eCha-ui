import { Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/components/login/login.component';
import { RegisterComponent } from './modules/auth/components/register/register.component';
import { LoginContainerComponent } from './modules/auth/container/login-container.component';
import { DonationComponent } from './modules/donation/donation.component';
import { CreateGiftListComponent } from './modules/gift-list/create-gift-list/create-gift-list.component';
import { MyListsComponent } from './modules/gift-list/my-lists/my-lists.component';
import { HomeComponent } from './modules/home/home.component';
import { LandingPageComponent } from './modules/landing-page/landing-page.component';
import { TermsOfServiceComponent } from './core/pages/terms-of-service/terms-of-service.component';
import { UseOfCookiesComponent } from './core/pages/use-of-cookies/use-of-cookies.component';
import { NotFoundComponent } from './core/pages/not-found/not-found.component';

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
      },
      {
        path: 'register',
        component: RegisterComponent
      }
    ]
  },
  {
    path: 'home',
    component: HomeComponent,
    // canActivate: [HomeGuardService],
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
    // canActivate: [isAuthenticatedGuard()],
  },
  {
    path: 'donation/:key',
    component: DonationComponent
  },
  // {
  //   path: 'terms-of-service',
  //   component: TermsOfServiceComponent
  // },
  // {
  //   path: 'cookies',
  //   component: UseOfCookiesComponent
  // },
  { path: '**', component: NotFoundComponent }

];

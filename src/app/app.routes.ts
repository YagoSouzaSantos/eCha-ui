import { Routes } from '@angular/router';
import { NotFoundComponent } from './core/pages/not-found/not-found.component';
import { isAuthenticatedGuard } from './core/security/auth.guard';
import { LoginComponent } from './modules/auth/components/login/login.component';
import { RegisterComponent } from './modules/auth/components/register/register.component';
import { LoginContainerComponent } from './modules/auth/container/login-container.component';
import { BulletinBoardComponent } from './modules/bulletin-board/bulletin-board.component';
import { CreateGiftListComponent } from './modules/gift-list/create-gift-list/create-gift-list.component';
import { DonationComponent } from './modules/gift-list/donation/donation.component';
import { EditorGiftListComponent } from './modules/gift-list/editor-gift-list/editor-gift-list.component';
import { HomeComponent } from './modules/home/home.component';
import { LandingPageComponent } from './modules/landing-page/landing-page.component';
import { ManageProfileComponent } from './modules/manage-profile/manage-profile.component';

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
    path: 'donation/:key',
    component: DonationComponent
  },
  {
    path: 'bulletin-board/:key',
    component: BulletinBoardComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [isAuthenticatedGuard()],
  },
  {
    path: 'creation',
    component: CreateGiftListComponent,
    canActivate: [isAuthenticatedGuard()],
  },
  {
    path: 'editor/:key',
    component: EditorGiftListComponent,
    canActivate: [isAuthenticatedGuard()],
  },
  {
    path: 'profile',
    component: ManageProfileComponent,
    canActivate: [isAuthenticatedGuard()],
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

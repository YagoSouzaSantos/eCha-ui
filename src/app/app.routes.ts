import { Routes } from '@angular/router';
import { SignInComponent } from './features/login/components/sign-in/sign-in.component';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';
import { LoginComponent } from './features/login/login.component';
import { SignUpComponent } from './features/login/components/sign-up/sign-up.component';

export const routes: Routes = [
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
  { path: 'my-profile', component: MyProfileComponent }
];

import { Routes } from '@angular/router';
import { SignInComponent } from './core/authentication/components/sign-in/sign-in.component';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';

export const routes: Routes = [
    { path: 'authentication', component: SignInComponent },
    { path: 'my-profile', component: MyProfileComponent }
];

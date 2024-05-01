import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './core/authentication/components/sign-in/sign-in.component';

export const routes: Routes = [
    {path: 'authentication', component: SignInComponent}
];




@NgModule({
    imports: [RouterModule.forRoot(routes, { bindToComponentInputs: true, useHash: true })],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
    {
      path: 'login',
      component: LoginComponent,
    },
    {
      path: 'signup',
      component: SignUpComponent,
    },

  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [],
  })
  export class AuthRouting {}
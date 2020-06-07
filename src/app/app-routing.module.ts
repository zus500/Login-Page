import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  Routes, RouterModule } from '@angular/router';
import { RegistraionPageComponent } from './Registration-page/registraion-page/registraion-page.component';
import {LoginPageComponent} from './Login-Page/login-page/login-page.component'
import { ForgotPasswordPageComponent } from './forgot-password-page/forgot-password-page/forgot-password-page.component';




const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent
  },
{
      path: 'registraion',
    component: RegistraionPageComponent
  },
  {
        path: 'forgot-password',
      component: ForgotPasswordPageComponent
    }
]


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } 
    )
  ]
})
export class AppRoutingModule { }

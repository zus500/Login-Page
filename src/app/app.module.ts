
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginPageComponent } from './Login-Page/login-page/login-page.component';
import { AppRoutingModule } from './app-routing.module';
import { RegistraionPageComponent } from './Registration-page/registraion-page/registraion-page.component';
import { RouterModule } from '@angular/router';
import { ForgotPasswordPageComponent } from './forgot-password-page/forgot-password-page/forgot-password-page.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegistraionPageComponent,
    ForgotPasswordPageComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    FontAwesomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

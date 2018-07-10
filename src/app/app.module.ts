import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';

import { AdminAuthGuardService } from './services/admin-auth-guard.service';
import { UserService } from './services/user.service';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { NavbarComponent } from './navbar/navbar.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
  
  BrowserModule,
  RouterModule.forRoot(
      [
        {
          path: '', component: HomeComponent
        },
        {
          path: 'register', component: RegisterComponent
        },
        {
          path: 'login', component: LoginComponent
        }
      ]
    )
  ],
  providers: [
    AdminAuthGuardService,
    AuthService,
    UserService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation'
import { RouterModule, Routes } from '@angular/router';

import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';

import { AdminAuthGuardService } from './services/admin-auth-guard.service';
import { UserService } from './services/user.service';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { NavbarComponent } from './navbar/navbar.component';

import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { BuilderComponent } from './builder/builder.component';
import { ChooseTemplateComponent } from './choose-template/choose-template.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NavbarComponent,
    BuilderComponent,
    ChooseTemplateComponent
  ],
  imports: [
  BrowserModule,
  BrowserAnimationsModule,
  NoopAnimationsModule,
  FormsModule,
  CustomFormsModule,

  MatButtonModule,
  MatMenuModule,
  MatIconModule,
  MatSelectModule,

  AngularFireModule.initializeApp(environment.firebase),
  AngularFireDatabaseModule,
  AngularFireAuthModule,

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
        },
        {
          path: 'choose-template', component: ChooseTemplateComponent
        },
        {
          path: 'builder', component: BuilderComponent
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

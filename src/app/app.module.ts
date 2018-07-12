import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation'
import { RouterModule, Routes } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';



import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BuilderComponent } from './builder/builder.component';
import { ChooseTemplateComponent } from './choose-template/choose-template.component';
import { AdminAreaComponent } from './admin-area/admin-area.component';
import { TemplateManagerComponent } from './template-manager/template-manager.component';
import { UserManagerComponent } from './user-manager/user-manager.component';


import { AdminAuthGuardService } from './services/admin-auth-guard.service';
import { UserService } from './services/user.service';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { TemplateService } from './services/template.service';



import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { ToastrModule } from 'ngx-toastr';
import { WorkExperienceComponent } from './work-experience/work-experience.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NavbarComponent,
    BuilderComponent,
    ChooseTemplateComponent,
    AdminAreaComponent,
    TemplateManagerComponent,
    UserManagerComponent,
    WorkExperienceComponent
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
    ToastrModule.forRoot(),
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
          path: 'choose-template', component: ChooseTemplateComponent, canActivate: [AuthGuardService]
        },
        {
          path: 'goToBuilder', component: BuilderComponent, canActivate: [AuthGuardService]
        },
        {
          path: 'workexp', component: WorkExperienceComponent, canActivate: [AuthGuardService]
        },
        {
          path: 'admin-area', component: AdminAreaComponent, canActivate: [AuthGuardService, AdminAuthGuardService]
        },
        {
          path: 'admin-area/template-manager', component: TemplateManagerComponent, canActivate: [AuthGuardService, AdminAuthGuardService]
        },
        {
          path: 'admin-area/user-manager', component: UserManagerComponent, canActivate: [AuthGuardService, AdminAuthGuardService]
        }
      ]
    )
  ],
  providers: [
    AdminAuthGuardService,
    AuthService,
    UserService,
    AuthGuardService,
    TemplateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

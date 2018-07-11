import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { AngularFireAuthModule  } from 'angularfire2/auth';
import { AuthService } from './../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private auth: AuthService) {
    
  }


  register(user){
    let email = user.email;
    let password = user.password;
    let displayName = user.name;
    this.auth.register(email, password, displayName)
  }

}

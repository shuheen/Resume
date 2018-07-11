import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from '../model/user';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  appUser: User;
  constructor(private auth: AuthService) {
    auth.appUser$.subscribe(appUser=> this.appUser = appUser)
  }structor() { }

  ngOnInit() {
  }

  logout(){
    this.auth.logout();
  }

}

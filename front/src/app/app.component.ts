import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
 
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private LoginService: LoginService, private router: Router) { } 
  
  logout() {
    this.LoginService.logout();
    this.LoginService.navigate(['login']);
  }
}

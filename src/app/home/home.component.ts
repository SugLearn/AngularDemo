import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { AuthService } from '../login/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLoggedIn = false;
  constructor(private router:Router, private authService:AuthService) { }

  ngOnInit() {
    this.isLoggedIn = this.authService.isUserLoggedIn();
    console.log('menu ->' + this.isLoggedIn);
  }

  handleadd(){
    this.router.navigate(['/add']);
  }

  employee(){
    this.router.navigate(['/employees']);
  }

  handleLogout() {
    this.authService.logout();
    this.router.navigate(['/logout']);
  }

}

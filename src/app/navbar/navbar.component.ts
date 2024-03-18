import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../myservices/user-services.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private userService:UserService, private router:Router){
  }
  loginTest(){
    return this.userService.loginFlag;
  }
  logOut(){
    this.userService.logOut();
    window.alert("logged out successfully....");
    this.router.navigate(['login'])
  }
}

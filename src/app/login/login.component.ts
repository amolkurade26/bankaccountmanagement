import { Component } from '@angular/core';
import { UserServicesService } from '../myservices/user-services.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  flag = false;
  loginError = '';
  constructor(private userService: UserServicesService, private router:Router) {}

  login(loginForm: any) {
    this.loginError="";
    this.flag = this.userService.loginCheck(
      loginForm.value.username,
      loginForm.value.password
    );
    if(this.flag)
    {
      window.alert("Logged in successfully.......");
      this.router.navigate(['home']);
    }
  else
      this.loginError="Incorrect username or password"
  }
  }
}

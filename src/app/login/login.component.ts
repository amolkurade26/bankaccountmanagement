import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { UserService } from '../myservices/user-services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  flag = false;
  loginError = '';
  constructor(private userService: UserService, private router: Router) {}

  login(loginForm: any) {
    this.loginError = '';
    this.flag = this.userService.loginCheck(
      loginForm.value.username,
      loginForm.value.password
    );
    if (this.flag) {
      window.alert('Logged in successfully.......');
      this.router.navigate(['home']);
    } else this.loginError = 'Incorrect username or password';
  }
}

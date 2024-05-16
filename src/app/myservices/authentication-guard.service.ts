import { Injectable } from '@angular/core';
import { UserService } from './user-services.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationGuardService {
  constructor(private userService: UserService,private router:Router) {}
  canActivate(): boolean {
    if (this.userService.loginFlag) return true;
    else {
      window.alert('Please login first...');
      this.router.navigate(['login'])
      //navigate to login component
      return false;
    }
  }
}

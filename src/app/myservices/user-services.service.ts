import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {

  username="admin";
  password="Admin@123"
  loginFlag = false;

  constructor() { }

  loginCheck(username:string, password:string){
    if (this.username===username && this.password===password){
      this.loginFlag = true;
      document.cookie = username;
    }
    else{
      this.loginFlag = false;
    }
    return this.loginFlag;
  }

}

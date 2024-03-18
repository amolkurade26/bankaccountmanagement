import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  username="admin";
  password="Admin@123"
  loginFlag=false; 
  constructor() { }
  loginCheck(username:string, password:string):boolean{
    if(username==this.username && password== this.password){
     this.loginFlag=true
     document.cookie=username;
    }
    else
      this.loginFlag=false;
    return this.loginFlag;
  }

  logOut(){
    this.loginFlag=false;
  }
}
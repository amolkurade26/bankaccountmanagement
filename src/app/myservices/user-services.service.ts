import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  username="admin";
  password="Admin@123"
  loginFlag=false; 
  constructor(private cookie:CookieService) { }
  loginCheck(username:string, password:string):boolean{
    // if(username==this.username && password== this.password){
    //  this.loginFlag=true
    //  this.cookie.set("bankadmin",username)
    // }
    // else
    //   this.loginFlag=false;
    // return this.loginFlag;
    return this.adminLoginCheck(username,password);
  }

  adminLoginCheck(username:string,password:string):boolean{
    if(username==this.username && password== this.password){
      this.loginFlag=true
      this.cookie.set("bankadmin",username)
     }
     else
       this.loginFlag=false;
     return this.loginFlag;
  }

  logOut(){
    this.loginFlag=false;
    this.cookie.delete("bankadmin");
  }
}
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  login(loginForm:any){
    console.log(loginForm.value);
    console.log(loginForm.value.username);
    console.log(loginForm.value.password);
    }
}

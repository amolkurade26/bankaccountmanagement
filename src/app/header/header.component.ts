import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  mainHeading:string;

  constructor(){
    this.mainHeading = "BANK ACCOUNT MANAGEMENT";
  }

}

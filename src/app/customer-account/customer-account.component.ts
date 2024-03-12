import { Component } from '@angular/core';
import { BankAccount } from '../classes/bank-account';


@Component({
  selector: 'app-customer-account',
  templateUrl: './customer-account.component.html',
  styleUrl: './customer-account.component.css'
})
export class CustomerAccountComponent {

  bankAccounts =new Array<BankAccount>();
  heading="";
  
  constructor(){
    this.createAccount();  }

  createAccount(){
    this.bankAccounts.push( new BankAccount(23000.1234,"Current","Amol Kurade",101,1011,new Date('01 March 2024')));
    this.bankAccounts.push( new BankAccount(63000.3431,"Saving","Prathamensh Mahamuni",102,1022,new Date('02 March 2024')));
    this.bankAccounts.push( new BankAccount(53000.9834,"Current","Sawan Kanojia",103,1033,new Date('05 March 2024')));
    this.bankAccounts.push( new BankAccount(43000.4567,"Current","Bansidhar Tiwary",104,1044));
    this.bankAccounts.push( new BankAccount(33000.3,"Saving","Rasika Parab",105,1055,new Date('15 March 2024')));
  }

  // passData(data:string){
  //   this.heading=data;   //4
  // }
}

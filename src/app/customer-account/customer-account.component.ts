import { Component } from '@angular/core';
import { BankAccount } from '../classes/bank-account';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-account',
  templateUrl: './customer-account.component.html',
  styleUrl: './customer-account.component.css'
})
export class CustomerAccountComponent {

  bankAccounts=new Array<BankAccount>();
   showForm=false;
   heading="";
   array:string[]=[];

   accountForm:FormGroup;


  constructor(){
    this.createAccount();  
    this.accountForm=new FormGroup({
      accountType:new FormControl("savings"),
      accountBalance:new FormControl("", [Validators.required, Validators.min(0)]), //1 For Validation
      customerName:new FormControl("",[Validators.required, Validators.pattern("[a-zA-Z ]*"), Validators.minLength(2)]),
      customerId:new FormControl("",[Validators.required]),
      id:new FormControl(),
      password:new FormControl("", [Validators.required, Validators.pattern("(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}")]),
      confirmPassword: new FormControl("")
    });
  }

  createAccount(){
    this.bankAccounts.push( new BankAccount(23000.1234,"Current","Amol Kurade","ax123",101,1011,new Date('01 March 2024')));
    this.bankAccounts.push( new BankAccount(63000.3431,"Saving","Prathamensh Mahamuni","ax123",102,1022,new Date('02 March 2024')));
    this.bankAccounts.push( new BankAccount(53000.9834,"Current","Sawan Kanojia","ax123",103,1033,new Date('05 March 2024')));
    this.bankAccounts.push( new BankAccount(43000.4567,"Current","Bansidhar Tiwary","ax123",104,1044));
    this.bankAccounts.push( new BankAccount(33000.3,"Saving","Rasika Parab","ax123",105,1055,new Date('15 March 2024')));
  }

  // passData(data:string){
  //   this.heading=data;   //4
  // }

  setDetails(){
    /* console.log(this.accountForm); */
    console.log(this.accountForm.value);
  }

  get balance(){
    return this.accountForm.get('accountBalance'); //2 For Validation
  }

  // get name(){
  //   return this.accountForm.get('customerName');
  // }
  get custname(){
    return this.accountForm.get('customerName'); //2.
  }

  get custid(){
    return this.accountForm.get('customerId');
  }

  get pass(){
    return this.accountForm.get('password');
  }
}

/**
 * 
 * required:
 *  if field empty
 *    return {required:true}
 * else
 * return null
 * 
 * min
 * 
 *  if min value req fails
 *    return {min :.....}
 * else
 *    return null
 */
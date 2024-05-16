import { Component } from '@angular/core';
import { BankAccount } from '../classes/bank-account';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from '../classes/custom-validators';
import { AcountCRUDService } from '../myservices/acount-crud.service';

@Component({
  selector: 'app-customer-account',
  templateUrl: './customer-account.component.html',
  styleUrl: './customer-account.component.css',
})
export class CustomerAccountComponent {
  
  bankAccount:BankAccount = new BankAccount();
  bankAccounts=new Array<BankAccount>();
  editFlag=false;
   showForm=false;
  heading="";
  array:string[]=[];
  accountForm:FormGroup;
  passwordPattern="(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}";
 constructor(private accCrud:AcountCRUDService   ){
   this.getAccounts();  
   this.accountForm=new FormGroup({
     accountType:new FormControl("savings"),
     accountBalance:new FormControl("", [Validators.required, Validators.min(0)]), //1.
     customerName:new FormControl("",[Validators.required, Validators.pattern("[a-zA-Z ]*"), Validators.minLength(2)]),
     customerId:new FormControl("",[Validators.required]),
     id:new FormControl(""),
     password:new FormControl("",[Validators.required, Validators.pattern(this.passwordPattern)]),
     confirmPassword:new FormControl("", [Validators.required])
   }, CustomValidators.matchPassword);
 }
 getAccounts(){
   //this.bankAccounts.push(new BankAccount(23000.78655,"current",'x123',"poonam Shah",666,67676767,new Date('12 March 2000')));
   //this.bankAccounts.push(new BankAccount(13000.4563,"savings","x123","SaMeer pujari",555,55555555,new Date('1 March 2000')));
   //this.bankAccounts.push(new BankAccount(83000.45,"current","x123","Radhika magar",787,86868686,new Date('12 May 2015')));
  // this.bankAccounts.push(new BankAccount(123000,"current","x123","Amar purohit",898,44444444));
  // this.bankAccounts.push(new BankAccount(1235000.123,"salary","x123","SaNdesh Mane",121,78787878,new Date('15 Nov 2020')));
  // this.bankAccounts.push(new BankAccount(1235000.123,"salary","x123","SaNdesh Kane",111,88787878));
  this.accCrud.getAllAccounts().subscribe({
    next:data=>this.bankAccounts=data as BankAccount[],
    error:err=>console.log(err)
  })
 
 }
 setDetails(){
   let formAccount:BankAccount=this.accountForm.value;
   //console.log(typeof formAccount.id);
   
   if(this.editFlag)
      this.updateAccount(formAccount)  //  object with updated values
   else
      this.createAccount(formAccount); //  object with new values
 }
 createAccount(formAccount:BankAccount){
  formAccount.accountDate=new Date(); // system date
    this.accCrud.addAccount(formAccount).subscribe({
     next:scc=>{
      window.alert("Account added Successfully...");
      this.getAccounts();
      this.resetForm();
    },
     error:err=>console.log(err)
    });
}
updateAccount(formAccount:BankAccount){
  formAccount.accountDate=this.bankAccount.accountDate;
  //console.log(formAccount);
  this.accCrud.updateAccount(formAccount).subscribe({
     next:scc=>{
      window.alert("Account updated Successfully...");
      this.getAccounts();
      this.resetForm();
    },
     error:err=>console.log(err)
  });
}
deleteAccount(accountNumber:number){
  this.accCrud.deleteAccountByAccNum(accountNumber).subscribe({
    next:scc=>{
    window.alert("Account deleted Successfully....");
    this.getAccounts(); 
  },
    error:err=>console.log(err)
   });
}
 getAccount(account:BankAccount){
   this.bankAccount=account;
  // console.log(this.bankAccount);  // date available
   this.acctype!.setValue(this.bankAccount.accountType);
   this.balance!.setValue(this.bankAccount.accountBalance);
   this.custid!.setValue(this.bankAccount.customerId);
   this.custname!.setValue(this.bankAccount.customerName);
   this.accnum!.setValue(this.bankAccount.id);
   this.pass!.setValue(this.bankAccount.password);
   this.confirmpass!.setValue(this.bankAccount.password);
   this.showForm=true;
   this.editFlag=true;
 }
 resetForm(){
   this.editFlag=false; // flag gets reset
   this.showForm=!this.showForm
   this.accountForm.reset();
   this.acctype!.setValue("savings");
 }
 get acctype(){
   return this.accountForm.get('accountType');
 }

 get balance(){
   return this.accountForm.get('accountBalance');  //2
 }
 get custname(){
   return this.accountForm.get('customerName'); 
 }
 get custid(){
   return this.accountForm.get('customerId'); 
 }
 get accnum(){
   return this.accountForm.get('id'); 
 }
 get pass(){
   return this.accountForm.get('password'); 
 }
 get confirmpass(){
   return this.accountForm.get('confirmPassword'); 
 }

 setBorder(){
   if(this.confirmpass!.getError('required') || this.accountForm.getError('mismatch'))
    return {border:"2px solid red"}
   else
    return {border:"2px solid green"}
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

/**
* create 1 custom validator class
* 
* create custom validation funcion
* put ur logic of comparing passowrds
*  if(pass not matiching)
*  return {'userdefinedKey':true}
* else
* return null
*/
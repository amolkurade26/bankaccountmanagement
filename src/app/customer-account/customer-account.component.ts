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
  bankAccounts = new Array<BankAccount>();
  showForm = false;
  heading = '';
  array: string[] = [];

  accountForm: FormGroup;

  constructor(private accCrud: AcountCRUDService) {
    // this.createAccount();
    this.getAllAccounts();
    this.accountForm = new FormGroup(
      {
        accountType: new FormControl('savings'),
        accountBalance: new FormControl('', [
          Validators.required,
          Validators.min(0),
        ]), //1 For Validation
        customerName: new FormControl('', [
          Validators.required,
          Validators.pattern('[a-zA-Z ]*'),
          Validators.minLength(2),
        ]),
        // customerName:new FormControl("",[Validators.required, Validators.pattern("^[a-zA-Z]+(\s[a-zA-Z]+)?$"), Validators.minLength(2)]),
        customerId: new FormControl('', [Validators.required]),
        id: new FormControl(),
        password: new FormControl('', [
          Validators.required,
          Validators.pattern(
            '(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}'
          ),
        ]),
        confirmPassword: new FormControl('', [Validators.required]),
      },
      CustomValidators.matchPassword
    );
  }

  // createAccount(){
  //   this.bankAccounts.push(new BankAccount(23000.78655,"current",'x123',"poonam Shah",666,67676767,new Date('12 March 2000')));
  //   this.bankAccounts.push(new BankAccount(13000.4563,"savings","x123","SaMeer pujari",555,55555555,new Date('1 March 2000')));
  //   this.bankAccounts.push(new BankAccount(83000.45,"current","x123","Radhika magar",787,86868686,new Date('12 May 2015')));
  //   this.bankAccounts.push(new BankAccount(123000,"current","x123","Amar purohit",898,44444444));
  //   this.bankAccounts.push(new BankAccount(1235000.123,"salary","x123","SaNdesh Mane",121,78787878,new Date('15 Nov 2020')));
  //   this.bankAccounts.push(new BankAccount(1235000.123,"salary","x123","SaNdesh Kane",111,88787878));
  // }

  getAllAccounts() {
    this.accCrud.getAllAccounts().subscribe({
      next: (data) => (this.bankAccounts = data as BankAccount[]),
      error: (err) => console.log(err),
    });
  }

  // passData(data:string){
  //   this.heading=data;   //4
  // }

  setDetails() {
    /* console.log(this.accountForm); */
    // console.log(this.accountForm.value);
    let bankAccount: BankAccount = this.accountForm.value;
    bankAccount.accountDate = new Date();
    // console.log(bankAccount);
    this.accCrud.addAccount(bankAccount).subscribe({
      next: (scc) => this.getAllAccounts(),
      error: (err) => console.log(err),
    });
  }

  get balance() {
    return this.accountForm.get('accountBalance'); //2 For Validation
  }

  get custname() {
    return this.accountForm.get('customerName'); //2.
  }

  get custid() {
    return this.accountForm.get('customerId');
  }

  get pass() {
    return this.accountForm.get('password');
  }

  get confirmpass() {
    return this.accountForm.get('confirmPassword');
  }

  setBorder() {
    if (
      this.confirmpass!.getError('required') ||
      this.confirmpass!.get('mismatch')
    )
      return { border: '2px solid red' };
    else return { border: '2px solid green' };
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

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BankAccount } from '../classes/bank-account';

@Component({
  selector: 'app-account-card',
  templateUrl: './account-card.component.html',
  styleUrl: './account-card.component.css'
})
export class AccountCardComponent {

  @Input()// data in customerAccount is input from parent
  customerAccount:BankAccount=new BankAccount();

  accountHeading = "Account Details" //this heading to passed data from child to parrent
  spaceIndex = 0;
  // constructor(){
  //   console.log("in constructor of Account Card Component");
  // }
  @Output()
  eventEmitter = new EventEmitter<string>(); //1
  
  ngOnInit(){
    this.eventEmitter.emit(this.accountHeading); //2. // via event we are passing data to direct parent
    this.spaceIndex = this.customerAccount.customerName.indexOf(" ");
  }
}

/** IN CHILD ts file
 *  delclare the data at child to be shared with parent
 * 1. create EventEmitter object
 * 2. emit the event and pass the data to parent
 * 
 * IN CHILD SELECTOR <> html template
 * 3. bind EventEmitter object and pass $event to parent variable 
 * 
 * PARENT TEMPLATE html template
 * 4. bind the data to parent template
 */
import { Component } from '@angular/core';
import { Customer } from '../classes/customer';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {
  customers:Customer[];
  param:any;
  customerId=0;
  customerFound: Customer | undefined;
  constructor(public routeService:ActivatedRoute) // service object automatically injected in constructor of component: DI
  {
    this.customers=[
      new Customer(44444444,"poonam Shah", 9090909090, "poonam@gmail.com"),
      new Customer(86868686,"SaMeer pujari", 8989898989, "pujari@gmail.com"),
      new Customer(55555555,"Radhika magar", 7777777777, "radha@gmail.com"),
      new Customer(88787878,"Amar purohit", 7878787878, "amar@gmail.com"),
      new Customer(78787878,"SaNdesh Mane", 9898989898, "smane@gmail.com"),
      new Customer(67676767,"SaNdesh Kane", 9999999999, "skane@gmail.com"),
    ]
    this.extractRouteParameter();
  }
  extractRouteParameter(){
      this.param=this.routeService.snapshot.params['custId'];
      this.customerId=parseInt(this.param);
      //console.log(this.customerId);
      this.findCustomer();
  }
  findCustomer(){
    this.customerFound=this.customers.find(customer=>customer.customerId==this.customerId);
  }
}


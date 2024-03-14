import { Component } from '@angular/core';
import { MathsService } from '../myservices/maths.service';

@Component({
  selector: 'app-savings-account',
  templateUrl: './savings-account.component.html',
  styleUrl: './savings-account.component.css',
  providers: [MathsService],
})
export class SavingsAccountComponent {
  counter1 = this.maths1.serviceCounter;
  // DI to get access to the service
  constructor(public maths1: MathsService) {}

  getCount() {
    this.maths1.incrementCounter();
    this.counter1 = this.maths1.getCounter();
  }
}

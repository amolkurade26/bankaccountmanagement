import { Component } from '@angular/core';
import { MathsService } from '../myservices/maths.service';

@Component({
  selector: 'app-salary-account',
  templateUrl: './salary-account.component.html',
  styleUrl: './salary-account.component.css',
})
export class SalaryAccountComponent {
  counter2 = this.maths2.serviceCounter;
  constructor(private maths2: MathsService) {}

  getCount() {
    this.maths2.incrementCounter();
    this.counter2 = this.maths2.getCounter();
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MathsService {
  public serviceCounter: number;
  constructor() {
    this.serviceCounter = 0;
  }

  incrementCounter(): void {
    this.serviceCounter++;
  }

  getCounter() {
    return this.serviceCounter;
  }
}

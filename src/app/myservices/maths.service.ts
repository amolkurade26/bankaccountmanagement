import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathsService {
  public serviceCounter:number;
  constructor() {
    this.serviceCounter=0;
   }

   increment():void{
    this.serviceCounter++;
   }

   getCOunter(){
    return this.serviceCounter;
   }



}



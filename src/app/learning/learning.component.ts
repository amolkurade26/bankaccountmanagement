import { Component } from '@angular/core';

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrl: './learning.component.css'
})
export class LearningComponent {
  bankName = "Axis Bank"; //One way DataBinding we can also do with help of Constructor
  officeLocation = "dadar";
  customerAge:number=0;
  percentage=0;

  cities=['rabale','pune','dadar','parel'];
  menus =['idli', 'medu vada','dosa', 'uttapa','poha','upma'];
  constructor(){
    console.log("In LearningComponent");
    window.setTimeout(() => this.changeStyle(),5000);
  }
  
  changeStyle(){
    this.styleObject.backgroundColor = "#00ffbf"
  }

  display(){
    debugger;
    console.log(this.bankName);
    console.log("officeLocation", this.officeLocation);
    
  }
  test(){
    console.log("Element is focussed");
  }

  inputMethod1(node:any){
    console.log("typeof node", typeof node);
    console.log("node ",node);    
  }

  inputMethod2(age:string){
    console.log("typeof age", typeof age);
    console.log("age", age);
  }

  styleObject={
    backgroundColor:'yellow',
    color:'red',
    border:'4px solid blue'
  }

  styleArray=['fontStyle','borderStyle'];
  styleClassObject={
    "fontStyle": true,
    "borderStyle":true
  }
}

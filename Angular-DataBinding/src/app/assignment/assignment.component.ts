import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {
  n1:Number;
  n2:Number;
  res:Number;
  
  add(n1:number,n2:number)
  {
    this.n1=n1;
    this.n2=n2;
    this.res= Number(n1)+ Number(n2)
  }
  subtract(n1:number,n2:number)
  {
    this.n1=n1;
    this.n2=n2;
    this.res= Number(n1)+ Number(n2)
  }

  constructor() { }

  ngOnInit() {
  }

}

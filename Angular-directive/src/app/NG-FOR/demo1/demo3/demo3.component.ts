import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/Models/student';

@Component({
  selector: 'app-demo3',
  templateUrl: './demo3.component.html',
  styleUrls: ['./demo3.component.css']
})
export class Demo3Component implements OnInit {
list:Student[]=[];
item:Student
sid:number;
sname:string;
std:string;
age:number;
val:boolean=true;
stds:string[]=["1","2","3"];
  constructor() 
  {
    this.list=[
      {sid:1,sname:'Rohan1',std:'IT',age:22},
      {sid:2,sname:'Rohan2',std:'IT',age:22},
      {sid:3,sname:'Rohan3',std:'IT',age:22},
      {sid:4,sname:'Rohan4',std:'IT',age:22}

    ]
      
  }

  ngOnInit() {
  }
  public Add()
  {
    this.item=new Student();
    this.item.sid=this.sid;
    this.item.sname=this.sname;
    this.item.std=this.std;
    this.item.age=this.age;
    this.list.push(this.item);

  }
  public SetVal()
  {
    this.val=!this.val;
  }

}

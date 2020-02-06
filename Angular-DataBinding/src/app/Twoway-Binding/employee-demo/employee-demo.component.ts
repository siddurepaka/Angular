import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Model/employee';

@Component({
  selector: 'app-employee-demo',
  templateUrl: './employee-demo.component.html',
  styleUrls: ['./employee-demo.component.css']
})
export class EmployeeDemoComponent implements OnInit {
item:Employee
  constructor() {
    //this.item=new Employee;
    this.item=new Employee();
   }

  ngOnInit() {
  }
  public Add()
  {
    
    console.log(this.item);
  }
}

import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/Model/student';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  obj:Student

  constructor() { 
    this.obj={Sid:1,Sname:"Ram",Dob:new Date(1997,6,8),Age:21}
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/Model/student';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
item:Student
  constructor() {
    this.item=new Student();
    this.item.Sid=1;
    this.item.Sname="Ram";
    this.item.Age=23;

   }

  ngOnInit() {
  }

}

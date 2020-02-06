import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.css']
})
export class Demo1Component implements OnInit {
no:number[]=[12,23,34,45,56]
name:string[]=["Rohan","Karan","Jason","Monika"]
  constructor() {
    this.name.push("Komali");
  }

  ngOnInit() {
  }

}

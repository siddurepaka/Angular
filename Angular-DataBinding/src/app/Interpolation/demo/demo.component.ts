import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
 name:string="Rohan";
 class:string="IT";
 age:number=21;
  constructor() { }

  ngOnInit() {
  }

}

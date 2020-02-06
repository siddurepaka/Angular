import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.css']
})
export class Demo1Component implements OnInit {
  items:any[]=[
    {name:"Default",val:1},
    {name:"one",val:1},
   { name:"two",val:1}
  ];
  SelectedValue:string='one';
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
msg:string="HAI";
  constructor() { 
    console.log(this.msg);
  }

  ngOnInit() {
  }

}

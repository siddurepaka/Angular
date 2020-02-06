import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/Model/customer';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.css']
})
export class CustomerViewComponent implements OnInit {
item:Customer
  constructor() { 
    this.item=new Customer();
    this.item.Name="Hari";
    this.item.Email="H@mail.com";
    this.item.City="Hyderabad";
    this.item.MobileNo=98480329;
  }

  ngOnInit() {
  }

}

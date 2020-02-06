import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/Model/customer';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css']
})
export class ViewCustomerComponent implements OnInit {
  obj:Customer;
  constructor() {
    this.obj={Name:"Abhi",City:"Hyd",Address:"Kukatpally",MobileNo:99899564,Email:"Sidd@mail.com"};

   }

  ngOnInit() {
  }

}

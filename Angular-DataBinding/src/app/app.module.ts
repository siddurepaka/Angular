import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './Interpolation/demo/demo.component';
//import { ViewComponent } from './Interpolation/view/view.component';
import { ModelComponent } from './Interpolation/model/model.component';
import { ViewCustomerComponent } from './Interpolation/view-customer/view-customer.component';
import { ViewComponent } from './Property-Binding/view/view.component';
import { CustomerViewComponent } from './Property-Binding/customer-view/customer-view.component';
import { EventdemoComponent } from './EventBinding/eventdemo/eventdemo.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { EmployeeDemoComponent } from './TwoWay-Binding/employee-demo/employee-demo.component';
@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    ViewComponent,
    ModelComponent,
    ViewCustomerComponent,
    CustomerViewComponent,
    EventdemoComponent,
    AssignmentComponent,
    EmployeeDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [EmployeeDemoComponent]
})
export class AppModule { }

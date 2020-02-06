import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { Demo1Component } from './NG-IF/demo1/demo1.component';
//import { Demo1Component } from './NG-FOR/demo1/demo1.component';
import { Demo3Component } from './NG-FOR/demo1/demo3/demo3.component';
//import { Demo1Component } from './NG-IF/demo1/demo1.component';
import { Demo1Component } from './NG-Switch/demo1/demo1.component';
import{FormsModule} from '@angular/forms';
import { AssignmentComponent } from './NG-FOR/assignment/assignment.component';


@NgModule({
  declarations: [
    AppComponent,
    Demo1Component,
    Demo3Component,
    AssignmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [Demo3Component]
})
export class AppModule { }

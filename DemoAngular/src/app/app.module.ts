import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoAngularComponent } from './UI/demo-angular/demo-angular.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoAngularComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [DemoAngularComponent]
})
export class AppModule { }

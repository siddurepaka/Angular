import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssignmentDetailsComponent } from './Twoway-Binding/assignment-details/assignment-details.component';

@NgModule({
  declarations: [
    AppComponent,
    AssignmentDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AssignmentDetailsComponent]
})
export class AppModule { }

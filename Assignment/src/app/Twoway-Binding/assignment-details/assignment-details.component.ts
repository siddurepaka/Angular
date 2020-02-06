import { Component, OnInit } from '@angular/core';
import { Details } from 'src/app/Models/details';

@Component({
  selector: 'app-assignment-details',
  templateUrl: './assignment-details.component.html',
  styleUrls: ['./assignment-details.component.css']
})
export class AssignmentDetailsComponent implements OnInit {
item:Details;
 admin:string="Admin";
 word:string="12345";
  

  constructor() {
    this.item=new Details();
  }

  ngOnInit() {
  }
  public Login(usname:string,password:string)
  {
    
    if((this.item.Username=="Admin")&&(this.item.Password=="12345"))
    {
      this.item.Output="Login Successful";
      console.log("Login Successful");
      
    }
    else{
      this.item.Output="Login UnSuccessful";
      console.log("Login Unsuccessful");
      
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/Models/project';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {
pro:Project;
list:Project[]=[];
ProjectID:number;
ProjectName:string;
ProjectDomain:string;
StartDate:Date;
EndDate:Date;
  constructor() { }

  ngOnInit() {
  }
  public submit()
  {
    this.pro=new Project();
    this.pro.ProjectID=this.ProjectID;
    this.pro.ProjectName=this.ProjectName;
    this.pro.ProjectDomain=this.ProjectDomain;
    this.pro.StartDate=this.StartDate;
    this.pro.EndDate=this.EndDate;
    this.list.push(this.pro);

  }

}

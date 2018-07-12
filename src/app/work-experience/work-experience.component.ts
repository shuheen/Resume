import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {
  objInit = [{
    jobTitle: '',
    companyName:'',
    startDate:'',
    endDate:'',
    rolesAndResponsibility:'',
}]
  constructor() { }

  ngOnInit() {
  }

  addMoreExp(){
    this.objInit.push({
      jobTitle: '',
      companyName:'',
      startDate:'',
      endDate:'',
      rolesAndResponsibility:'',
    })
  }

  saveExp(exp){
    console.log(exp);
  }

}

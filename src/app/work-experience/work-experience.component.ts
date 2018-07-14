import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {
  localExp;
  objInit;
  constructor(private router: Router) { }

  ngOnInit() {
    this.getObjArr();
  }

  getObjArr() {
    if (localStorage.getItem('workExp')) {
      let arr = [];
      let p = JSON.parse(localStorage.getItem('workExp'));
      for (var key in p) {
        if (p.hasOwnProperty(key)) {
          arr.push(p[key]);
        }
      }
      this.objInit = arr;
    }
    else {
      this.objInit = [
        {
          jobTitle: '',
          companyName: '',
          startDate: '',
          endDate: '',
          rolesAndResponsibility: '',
        }]
    }
  }


  getCountofObj(obj) {
    var count = 0;
    for (var property in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, property)) {
        count++;
      }
    }
    return count;
  }


  addMoreExp() {
    // let objKey = ("Experience" + (this.getCountofObj(this.objInit) + 1));
    // let count = this.getCountofObj(this.objInit) + 1
    this.objInit.push({
      jobTitle: '',
      companyName: '',
      startDate: '',
      endDate: '',
      rolesAndResponsibility: '',
    }
    )
  }

  saveExp(exp) {
    if (localStorage.getItem('workExp'))
      localStorage.removeItem('workExp');
      localStorage.setItem('workExp', JSON.stringify(exp));
      
    this.router.navigate(['../skills'])
  }

  back() {
    this.router.navigate(['/goToBuilder']/*, { skipLocationChange: true }*/)
  }

}

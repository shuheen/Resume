import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.css']
})
export class QualificationComponent implements OnInit {
  localExp;
  objInit;
  constructor(private router: Router) { }

  ngOnInit() {
    this.getObjArr();
  }

  getObjArr() {
    if (localStorage.getItem('qualification')) {
      let arr = [];
      let p = JSON.parse(localStorage.getItem('qualification'));
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
          course: '',
          institution: '',
          startDate: '',
          endDate: '',
          information: '',
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
    this.objInit.push({
      course: '',
      institution: '',
      startDate: '',
      endDate: '',
      information: '',
    })
  }

  saveQualification(qualification) {
    if (localStorage.getItem('qualification'))
      localStorage.removeItem('qualification');
      localStorage.setItem('qualification', JSON.stringify(qualification));
      
    this.router.navigate(['../preview'])
  }

  back() {
    this.router.navigate(['/skills']/*, { skipLocationChange: true }*/)
  }

}

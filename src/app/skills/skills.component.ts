import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skillInit;
  constructor(private router: Router) { }

  ngOnInit() {
    this.getObjArr();
    console.log(this.skillInit);
  }

  getObjArr() {
    if (localStorage.getItem('skills')) {
      let arr = [];
      let p = JSON.parse(localStorage.getItem('skills'));
      for (var key in p) {
        if (p.hasOwnProperty(key)) {
          arr.push(p[key]);
        }
      }
      this.skillInit = arr;
    }
    else {
      this.skillInit = [{
         name: '',
         rating:''
        }]
    }
  }



  addMoreSkill(){
    this.skillInit.push({
      name:'',
      rating:'',
    })
  }

  saveSkills(skills){
    if (localStorage.getItem('skills'))
      localStorage.removeItem('skills');
      localStorage.setItem('skills', JSON.stringify(skills));
      
    this.router.navigate(['../qualification'])
  }
  
  back() {
    this.router.navigate(['../workexp']/*, { skipLocationChange: true }*/)
  }

}

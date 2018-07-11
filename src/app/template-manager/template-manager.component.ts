import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-manager',
  templateUrl: './template-manager.component.html',
  styleUrls: ['./template-manager.component.css']
})
export class TemplateManagerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  addTemplateSlide(){
    this._toggleSidebar();
  }

  addTemplate(template){
    console.log(template);
  }

  _showSide: boolean = false;

  _toggleSidebar() {
    this._showSide = !this._showSide;
  }

  closeSideNav() {
    this._toggleSidebar();
  }

}

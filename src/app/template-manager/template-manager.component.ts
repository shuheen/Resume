import { Component, OnInit } from '@angular/core';
import { TemplateService } from '../services/template.service';
import { Template } from '../model/template';

@Component({
  selector: 'app-template-manager',
  templateUrl: './template-manager.component.html',
  styleUrls: ['./template-manager.component.css']
})
export class TemplateManagerComponent implements OnInit {
  selectedFile: FileList;
  templateModel: Template
  constructor(private templateService: TemplateService) { }

  ngOnInit() {
  }

  
  addTemplateSlide(){
    this._toggleSidebar();
  }

  saveTemplateImage(event){
    this.selectedFile = event.target.files[0];
  }
  saveTemplate(template, event){
    let templateName = template.templateName;
    this.templateService.saveTemplate(templateName, this.selectedFile, event);
    this._toggleSidebar();
  }

  _showSide: boolean = false;

  _toggleSidebar() {
    this._showSide = !this._showSide;
  }

  closeSideNav() {
    this._toggleSidebar();
  }

}

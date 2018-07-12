import { Component, OnInit } from '@angular/core';
import { TemplateService } from './../services/template.service';
import { Template } from '../model/template';

@Component({
  selector: 'app-choose-template',
  templateUrl: './choose-template.component.html',
  styleUrls: ['./choose-template.component.css']
})
export class ChooseTemplateComponent implements OnInit {
  templateModel: Template;
  templateList:Template[];
  constructor(private templateService: TemplateService) { }

  ngOnInit() {
    var x = this.templateService.getTemplates();
      x.snapshotChanges().subscribe(template => {
        this.templateList = [];
        template.forEach(element => {
          var y = element.payload.toJSON();
          y["$key"] = element.key;
          this.templateList.push(y as Template);
        });
      });
  }

}

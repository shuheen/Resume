import { Component, OnInit } from '@angular/core';
import { ResumeService } from './../services/resume.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css']
})
export class BuilderComponent implements OnInit {
  selectedFile = null;
  selectFileName;
  url;
  basicInfoObject;
  constructor(private resumeService: ResumeService, private router: Router) { }

  ngOnInit() {
  }

  readUrl(event:any) {
    this.selectedFile = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
  
      reader.onload = (event:any) => {
        this.url = event.target.result;
      }
  
      reader.readAsDataURL(event.target.files[0]);
    }
  }


  saveBasicInfo(basicInfo){
    this.basicInfoObject = {
      "basicInfo":{
        firstName: basicInfo.firstName,
        lastName: basicInfo.lastName,
        email: basicInfo.email,
        phone: basicInfo.phone,
        address: basicInfo.fulladdress,
        url: this.url
      }
    }
    this.router.navigate(['../workexp'])
    // this.resumeService.saveBasicInfo(basicInfo, this.url);
  }








  removeUpload() {
    // $('.file-upload-input').replaceWith($('.file-upload-input').clone());
    // $('.file-upload-content').hide();
    // $('.image-upload-wrap').show();
  }
  // $('.image-upload-wrap').bind('dragover', function () {
  //         $('.image-upload-wrap').addClass('image-dropping');
  //     });
  //     $('.image-upload-wrap').bind('dragleave', function () {
  //         $('.image-upload-wrap').removeClass('image-dropping');
  // });

}

import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
// declare let jsPDF;
@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
  // @ViewChild('test') el: ElementRef;
  imageExist = false;
  basicInfoJson; 
  constructor() { }

  ngOnInit() {
    this.basicInfoJson = JSON.parse(localStorage.getItem('basicInfo'));
    if(this.basicInfoJson.url){
      this.imageExist = true;
    }
  }


//   public download() {
//     var doc = new jsPDF();
//     doc.text(20, 20, 'Hello world!');
//     doc.save('Test.pdf');
// }

// public pdfHtml() {
//     let pdf = new jsPDF();
//     console.log(pdf);
//     let options = {
//         pagesplit: false
//     };
//     pdf.addHTML(this.el.nativeElement, 0, 0, options, () => {
//         pdf.save("test.pdf");
//     });
// }

}

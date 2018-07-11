import { Injectable } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';

import * as firebase from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class TemplateService {
  fileName;
  url;
  name;
  // uploadTemplate: {
  //   imageUrl: string;
  //   name: string;
  // }
  constructor(private af: AngularFireModule, private db: AngularFireDatabase) { }


  saveTemplate(templateName, selectedFile, event){
    this.fileName = selectedFile.name;
    var metadata = {
      contentType: 'image/jpeg'
    };
    let storageRef = firebase.storage().ref("/templateImages/" + this.fileName);
    var uploadImage = storageRef.put(selectedFile);

    uploadImage.on('state_changed', function(snapshot){
      
      console.log(snapshot);
      // Observe state change events such as progress, pause, and resume
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      var progress = (uploadImage.snapshot.bytesTransferred / uploadImage.snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');
      switch (uploadImage.snapshot.state) {
        case firebase.storage.TaskState.PAUSED: // or 'paused'
          console.log('Upload is paused');
          break;
        case firebase.storage.TaskState.RUNNING: // or 'running'
          console.log('Upload is running');
          break;
      }
    }, function(error) {
      // Handle unsuccessful uploads
    }, function() {
      
      
      // Handle successful uploads on complete
      // For instance, get the download URL: https://firebasestorage.googleapis.com/...
      uploadImage.snapshot.ref.getDownloadURL().then(function(downloadURL) {
        let url = downloadURL;
        firebase.database().ref('/templates').push({
          name: selectedFile.name,
          imageUrl: url
        });
        event.target.reset();
        // console.log('File available at', downloadURL);
      });
    });
    
    
}


// saveTemplateToDatabase(filename, imageUrl){
//   var dbRef = firebase.storage.ref("/templates/"+ name )
// }

}

import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  fileName;
  uniqueIdentifier;
  basicInfo: {};
  constructor(private db: AngularFireDatabase, private authService: AuthService ) { }


  async storeImage(selectedFile){

    await this.authService.user$.subscribe(user=>{
      this.uniqueIdentifier = new Date().getTime().toString() + user.uid;
    });
    
    this.fileName = selectedFile.name;
    var metadata = {
      contentType: 'image/jpeg'
    };
    let storageRef = firebase.storage().ref("/resumePic/" + this.fileName + this.uniqueIdentifier);
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
         return url;
        
      });
    });
}


// saveBasicInfo(basicInfo){
  
//   }
//   console.log(this.basicInfo);
// }





  // saveBasicInfo(basicInfo, fileName, event){
  //   this.db.list('/resume').push({
  //     basicInfo:{
  //       firstName: basicInfo.firstName,
  //       lastName: basicInfo.lastName,
  //       email: basicInfo.email,
  //       phone: basicInfo.phone,
  //       address: basicInfo.address
  //     }
  //   })
  // }
}

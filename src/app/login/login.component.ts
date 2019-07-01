import { Component, OnInit } from '@angular/core';
import {FirebaseService, } from '../firebase.service'
import { from } from 'rxjs';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  registerForm : FormGroup;
  isDisabled : boolean;
  fileToUpload: File = null;
  progess : number;
  picturePath : string;
 get password(): AbstractControl {
    return this.registerForm.get('password');
  }

  get passwordValid(): boolean {
    return this.password.touched && this.password.invalid;
  }

  constructor(public FS : FirebaseService,
              public FB : FormBuilder) {this.isDisabled = true}
  ngOnInit() {

    this.registerForm = this.FB.group({
      Username : [""],
      Password : [''],
      Picture : [null],
      // Status : [""]
    });
    
     
    // let userRef = this.FS.db.collection('User')
    // userRef.add({
    //   Username : 'user1',
    //   Password : 'user1',
    //   Status : true
    // })
     
    
  //   const observable = from(this.FS.db.collection('User').doc('Y07zdWNIX5TnwfPDQRox').get().then(doc => {
  //     return doc.data();
  //   }));
  //  observable.subscribe(doc => {
  //    this.User.Username = doc.Username;
  //    this.User.Password = doc.Password;
  //    this.User.Status = doc.Status;
  //  })



 
  }
  onSubmit(){
    const FileUpload = this.fileToUpload
    let form = this.registerForm
    const pictureRef = this.FS.db.collection('Picture');
    form.disable();
  const storageRef = this.FS.fs.ref(`Picture/${Date.now()}_${FileUpload.name}`);
  var uploadTask =  storageRef.put(FileUpload);
  uploadTask.on('state_changed', function(snapshot){
    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
  }, function(error) {
    console.log(error);
  }, function() {
    uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
      //You can call service to use "ADD" Function in sql here.
      pictureRef.add({
        Name : `${Date.now()}_${FileUpload.name}`,
        DownloadURL : downloadURL
      })
      alert('Upload Success !')
      console.log('File available at', downloadURL);
      form.enable();
      
    });
  });
  }

  handleFileInput(files: FileList){ //This function use to set the file you want to upload. When you change a picture, this function do the same again.
    this.fileToUpload = files.item(0);
  }
}

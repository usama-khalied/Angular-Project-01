import { AfterViewInit, Component, OnInit } from '@angular/core';

declare var google: any;
@Component({
  selector: 'app-google-login',
  templateUrl: './google-login.component.html',
  styleUrls: ['./google-login.component.css']
})
export class GoogleLoginComponent implements OnInit {
  newArr:any
  newObj:any;
  userName:string=" ";
  userPicture:string = ' '
ngOnInit(): void {

}
  constructor() { }

  ngAfterViewInit(): void {
    google.accounts.id.initialize({
      client_id: "236025958894-l05tha7iovc0ool81upch4i6gi91npe8.apps.googleusercontent.com",
      callback: (response: any) => this.handleGoogleSignIn(response)
    });
    google.accounts.id.renderButton(
      document.getElementById("buttonDiv"),
      { size: "large", type: "icon", shape: "pill" }
       // customization attributes
    );
  }

  handleGoogleSignIn(response: any) {



    // This next is for decoding the idToken to an object if you want to see the details.
    let base64Url = response.credential.split('.')[1];
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    let jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {

      return  '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);

    }).join(''));

    console.log(JSON.parse(jsonPayload));

    let obj = JSON.parse(jsonPayload)
     this.newObj = obj
     console.log(this.newObj)
     this.userName = this.newObj.name
     this.userPicture = this.newObj.picture
  }

}

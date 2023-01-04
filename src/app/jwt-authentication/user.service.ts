import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(public http: HttpClient, private router: Router) {}

  loginService(data: any) {
    this.http
      .post('http://localhost:4000/signin',data)
      .subscribe((res: any) => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/profile']);
      });
      console.log(localStorage.getItem('token'));
  }
    profile(){
    let headers = new HttpHeaders().set("Authorization",`bearer ${localStorage.getItem('token')}`);
    this.http.post("http://localhost:5000/profile",{},{headers}).subscribe((res:any) => {
      console.log(res)
    });  
  }
  getToken(){
    return localStorage.getItem('token')
  }
}

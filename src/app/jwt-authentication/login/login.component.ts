import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {UserService} from '../user.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public service : UserService) { }

  ngOnInit(): void {
  }
  onSubmit(login:NgForm){
   this.service.loginService(login);
  }
}

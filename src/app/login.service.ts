import { LoginComponent } from './login/login.component';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) { 

  }

  login(username, password) {
    console.log(username)
    console.log(password)

    this.http.post("http://localhost:8080/login", {
      username:username,
      password:password
    }).subscribe(data => {
      console.log(data)
    },err => {
      console.log('error occured')
    })
  }

}

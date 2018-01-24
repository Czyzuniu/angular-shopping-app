import { LoginService } from './../login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private isVisible : boolean
  private username : String
  private password : String

  constructor(private LoginService: LoginService) {
    this.isVisible = false
  }

  ngOnInit() {
  }

  loginToShop() :void {
    this.LoginService.login(this.username, this.password)
  }

  setVisible() {
    this.isVisible = true;
  }

  setInvisible() {
    this.isVisible = false;
  }

}

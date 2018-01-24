import { LoginService } from './../login.service';
import { LoginComponent } from './../login/login.component';

import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  itemCount : Number
  shopName : String
  loggedIn : Boolean
  

  constructor() {
    this.shopName = "Konrad's Shopping"
    this.itemCount = 0
    this.loggedIn = false
  }

  ngOnInit() {

  }

}

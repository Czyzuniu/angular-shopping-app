import { LoginService } from './login.service';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { ShopComponent } from './shop/shop.component';


export const firebaseConfig = {
  apiKey: "AIzaSyBF4MPmYptSn5h4vf2wLj4XfL55NdZAr-0",
  authDomain: "my-shopping-app-47431.firebaseapp.com",
  databaseURL: "https://my-shopping-app-47431.firebaseio.com",
  projectId: "my-shopping-app-47431",
  storageBucket: "my-shopping-app-47431.appspot.com",
  messagingSenderId: "1067090823628"
};


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    FooterComponent,
    ShopComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpClientModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }

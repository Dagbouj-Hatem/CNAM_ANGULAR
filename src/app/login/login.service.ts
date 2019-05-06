import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url ="http://127.0.0.1:3000/customers";
  
  constructor(private router:Router, private httpClient:HttpClientModule) { }

  authenticate(username, password) {

    // test  with data base  
   
    // test  without data base 
    if (username === "hatem" && password === "000011") {
      sessionStorage.setItem('username', username)
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }

}

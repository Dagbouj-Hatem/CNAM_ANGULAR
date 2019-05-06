import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  submitted = false;
  invalidLogin = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginservice: LoginService) 
    { }

  ngOnInit() {
    // create the validation
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required], 
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // get the forum control 
  get formControls() { return this.loginForm.controls; }


  //Authenticate the username and password 
  authenticate() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        if (this.loginservice.authenticate(this.loginForm.value.username, this.loginForm.value.password)
        ) {
          this.router.navigate(['/dashboard'])
        } else
          this.invalidLogin = true 
  }

}

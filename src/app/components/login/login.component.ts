import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    login: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  constructor() {
  }

  ngOnInit() {
  }

  getPasswordErrorMessage() {
    return this.loginForm.get('password').hasError('required') ? 'You must enter a password' :
      this.loginForm.get('password').hasError('minlength') ? 'Your password must be longer than 6 characters' :
        '';
  }

  xxx() {
    console.log('pass: ', this.loginForm);
  }

}

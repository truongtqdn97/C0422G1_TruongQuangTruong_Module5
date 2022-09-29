import { Component, OnInit } from '@angular/core';
import {AbstractControl, Validators} from '@angular/forms';
import { FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor() {
    this.registerForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),

      passwordGroup: new FormGroup({
        password: new FormControl("", [Validators.required, Validators.minLength(6)]),
        confirmPassword: new FormControl()
      }, [this.validatePassword]),

      country: new FormControl(),
      age: new FormControl("", [Validators.required, Validators.min(18)]),
      gender: new FormControl("", [Validators.required]),
      phone: new FormControl("", [Validators.pattern("^\\+84\\d{9,10}$")])
    });
  }

  ngOnInit(): void {
  }

  registerAccount() {
    console.log(this.registerForm);
  }

  validatePassword(passwordGroup: AbstractControl) {
    let pass = passwordGroup.get('password').value;
    let passConfirm = passwordGroup.get('confirmPassword').value;
    if (pass !== passConfirm){
      return {'invalidPassword': true}
    }
    return null;
  }
}

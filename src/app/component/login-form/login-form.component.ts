import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }
  error:string = "";
  isLogining:boolean = false;
  emailFormControl:any = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl:any = new FormControl('', [Validators.required, Validators.minLength(6)]);

  async submit(){
    this.isLogining = true;
    if(this.emailFormControl.status === "VALID" && this.passwordFormControl.status === "VALID"){
      this.error = "";
      const loginResponse = await this.authService.login(this.emailFormControl.value, this.passwordFormControl.value);
      if(loginResponse && loginResponse.includes("auth/user-not-found")){
        const signUpResponse = await this.authService.signUp(this.emailFormControl.value, this.passwordFormControl.value);
        this.isLogining = false;
      }else{
        this.isLogining = false;
      }
    }else{
      this.error = "Please enter valid details";
      this.isLogining = false;
    }
  }

}

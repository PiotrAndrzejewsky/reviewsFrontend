import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { SignUpUser } from '../models/sign-up-view-model';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  public user: SignUpUser = {
    username: "",
    password: "",
    password2: "",
    email: ""
  };


  public signUpForm = new FormGroup({
    username: new FormControl(this.user.username, [
      Validators.required,
      Validators.minLength(3)
    ]),

  })

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}


  saveUser(): void {
    if (this.comparePasswords()) {
      this.authService.saveUser(this.user).pipe(
        take(1)
      ).subscribe(res => {
        this.router.navigateByUrl("/");
      },
      err => {
        alert("Username is taken");
      })
    }
    else {
      alert("Passwords do not match")
    }
  }


  goToLogin(): void {
    this.router.navigateByUrl("");
  }

  comparePasswords(): boolean {
    return this.user.password == this.user.password2;
  }

}

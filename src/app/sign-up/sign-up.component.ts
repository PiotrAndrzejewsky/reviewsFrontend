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

  showMessage = false;
  errorMessage = "";

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
        this.router.navigateByUrl("login?signedUp=true");
      },
      err => {
        this.showMessage = true;
        if (err.status === 409) {
          this.errorMessage = "Email is taken";
        } else {
          this.errorMessage = "An error occurred";
        }
      });
    }
    else {
      this.showMessage = true;
      this.errorMessage = "Passwords do not match";
    }
  }


  goToLogin(): void {
    this.router.navigateByUrl("");
  }

  comparePasswords(): boolean {
    return this.user.password == this.user.password2;
  }

}

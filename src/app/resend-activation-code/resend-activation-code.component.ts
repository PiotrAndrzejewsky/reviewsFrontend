import { Component } from '@angular/core';
import { take } from 'rxjs';
import { User } from '../models/login-view-model';
import { ActivationService } from '../services/activation.service';

@Component({
  selector: 'app-resend-activation-code',
  templateUrl: './resend-activation-code.component.html',
  styleUrls: ['./resend-activation-code.component.css']
})
export class ResendActivationCodeComponent {
  public user: User = {
    username: "",
    password: "",
    email: ""
  };

  constructor(private activationService: ActivationService) {}

  public resend() {
    this.activationService.resendActivationCode(this.user).pipe(
      take(1)
    ).subscribe(
      res => {
        alert("Email was sent again!");
      },
      err => {
        alert("Something went wrong, try again later!");
      }
    )
  }

}

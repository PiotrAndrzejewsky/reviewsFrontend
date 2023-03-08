import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { catchError, take } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { CookieService } from 'ngx-cookie-service';
import { User } from '../models/login-view-model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  showClass = false;

  public user: User = {
    username: "",
    password: "",
    email: ""
  };

  constructor(
    private authService: AuthService,
    private router: Router,
    private cookieService: CookieService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.cookieService.deleteAll();
    this.route.queryParams.subscribe(params => {
      if (params["signedUp"] == "true") {
        this.showClass = true;
      };
    });
  }

  public authUser(): void {
    this.authService.sendLoginRequest(this.user).pipe(
      take(1),
      catchError(err => {
        alert("Something went wrong")
        return err
      }),
    ).subscribe(res => {
      this.cookieService.set("id", res.body);
      this.router.navigateByUrl("/" + environment);
    });
  }


  goToSignUp(): void {
    this.router.navigateByUrl("/signUp");
  }
}

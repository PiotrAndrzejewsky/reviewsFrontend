import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { take } from 'rxjs';
import { ActivationService } from '../services/activation.service';

@Component({
  selector: 'app-activate',
  templateUrl: './activate.component.html',
  styleUrls: ['./activate.component.css']
})


export class ActivateComponent implements OnInit{

  token!: string;

  constructor(private route: ActivatedRoute,
    private activationService: ActivationService,
    private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.token = params['token'];
      this.activateUser(this.token);
    });
  }

  private activateUser(token: string): void {
    this.activationService.activateUser(token).pipe(
      take(1)
    )
    .subscribe(
      res => {
        this.router.navigateByUrl("/login");
      },
      err => {
        alert("Something went wrong");
      }
    );
  }

}

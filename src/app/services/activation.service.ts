import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/login-view-model';

@Injectable({
  providedIn: 'root'
})
export class ActivationService {

  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
  ) { }

  public resendActivationCode(user: User): Observable<any> {
    return this.http.post<number>(`${environment.baseUrl}user/resend-activation-code`, user, { observe: 'response'});
  }

  public activateUser(token: string): Observable<any> {
    let url = environment.baseUrl + "user/activate";
    console.log(token)
    this.cookieService.set(environment.AccessToken, token);
    return this.http.post<boolean>(url, null, { observe: 'response'})
  }
}

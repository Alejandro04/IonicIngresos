import { TokenPayload, TokenResponse } from './../../models/auth.model';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string;
  private urlAuth: string = "https://plataforma-finanzas-auth-321x4k2qn.vercel.app"


  constructor(private http: HttpClient, private router: Router) {}

  public login(user: TokenPayload): Observable<any> {
    return this.http.post(`${this.urlAuth}/api/login`, user).pipe(
      map((data: TokenResponse) => {
        return data;
      })
    );
  }

  public register(user: TokenPayload): Observable <any> {
    return this.http.post(`${this.urlAuth}/api/register`, user).pipe(
      map((data: TokenResponse) => {
        return data;
      })
    );
  }

}

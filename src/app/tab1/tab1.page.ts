import { Router } from '@angular/router';
import { TokenResponse, TokenPayload } from './../models/auth.model';
import { Component } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  loginErrors: Array<{}> = new Array();
  credentials: TokenPayload = {
    email: '',
    password: ''
  }

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    this.auth.login(this.credentials).subscribe(() => {
      this.router.navigateByUrl('/dashboard');
    })
  }
}

import { Router } from '@angular/router';
import { TokenResponse, TokenPayload } from './../models/auth.model';
import { Component } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  loginErrors: Array<{}> = new Array();
  credentials: TokenPayload = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  }

  constructor(private auth: AuthService, private router: Router) {}

  register() {
    this.auth.register(this.credentials).subscribe((data) => {
      localStorage.setItem("token", data.token)
      this.router.navigateByUrl('dashboard')
    })
  }
}

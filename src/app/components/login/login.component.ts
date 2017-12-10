import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private oauthService: OAuthService
  ) { }

  ngOnInit() {
    console.log(this.oauthService.hasValidAccessToken());
  }

  login(): void {
    this.oauthService.initImplicitFlow();
  }

}

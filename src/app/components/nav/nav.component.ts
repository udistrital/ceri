import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(
    private oauthService: OAuthService
  ) { }

  ngOnInit() {
  }

  logout() {
    this.oauthService.logOut();
  }

}

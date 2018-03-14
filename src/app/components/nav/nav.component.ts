import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(
    private oauthService: OAuthService,
    public router: Router
  ) { }

  ngOnInit() {
  }

  logout() {
    this.oauthService.logOut();
    this.router.navigate(['/login'])
  }

}

import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
    moduleId: module.id,
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

    user_profile: any;

    constructor(
        private oauthService: OAuthService
    ) { }

    ngOnInit() {
    }

    public get name() {
        const claims = this.oauthService.getIdentityClaims();
        if (!claims) {
            return null;
        }
        // console.log(claims);
        return claims['name'];
    }

}

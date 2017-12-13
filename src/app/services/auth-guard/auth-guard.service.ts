import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(
    private oauthService: OAuthService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
        const hasIdToken = this.oauthService.hasValidIdToken();
        console.log('id_token', hasIdToken);
        const hasAccessToken = this.oauthService.hasValidAccessToken();
        console.log('acces_token', hasAccessToken);
        console.log('return', hasIdToken && hasAccessToken);
        return (hasIdToken && hasAccessToken);
}

}

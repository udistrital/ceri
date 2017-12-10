import { AuthConfig } from 'angular-oauth2-oidc';

export const googleAuthConfig: AuthConfig = {

  // Url of the Identity Provider
  issuer: 'https://accounts.google.com',

  // The SPA's id. The SPA is registerd with this id at the auth-server
  clientId: '528915229778-ldhdab6thtfe3e4rk4v6tjgmndguabpb.apps.googleusercontent.com',

  // URL of the SPA to redirect the user to after login
  redirectUri: window.location.origin + '/landing',

  strictDiscoveryDocumentValidation: false,

  // set the scope for the permissions the client should request
  scope: 'openid profile email',

  // receive also an id_token via openId Connect in addition to the Oauth2-based access_token
  oidc: true,

  showDebugInformation: true,

  sessionChecksEnabled: true
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { OAuthModule } from 'angular-oauth2-oidc';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { LandingComponent } from './components/landing/landing.component';
import { DocentesSalientesComponent } from './components/docentes-salientes/docentes-salientes.component';
import { EstudiantesSalientesComponent } from './components/estudiantes-salientes/estudiantes-salientes.component';
import { DocentesEntrantesComponent } from './components/docentes-entrantes/docentes-entrantes.component';
import { EstudiantesEntrantesComponent } from './components/estudiantes-entrantes/estudiantes-entrantes.component';
import { routes } from './app.routes';
import { LoginComponent } from './components/login/login.component';
import { AuthGuardService } from 'app/services/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    DocentesSalientesComponent,
    EstudiantesSalientesComponent,
    DocentesEntrantesComponent,
    EstudiantesEntrantesComponent,
    NavComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot(routes),
    OAuthModule.forRoot()
  ],
  providers: [
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

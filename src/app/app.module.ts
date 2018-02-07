// imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { OAuthModule } from 'angular-oauth2-oidc';

// componentes
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { LandingComponent } from './components/landing/landing.component';
import { DocentesSalientesComponent } from './components/docentes-salientes/docentes-salientes.component';
import { EstudiantesSalientesComponent } from './components/estudiantes-salientes/estudiantes-salientes.component';
import { DocentesEntrantesComponent } from './components/docentes-entrantes/docentes-entrantes.component';
import { EstudiantesEntrantesComponent } from './components/estudiantes-entrantes/estudiantes-entrantes.component';
import { routes } from './app.routes';
import { LoginComponent } from './components/login/login.component';
import { CategoriasMovilidadComponent } from './components/categorias-movilidad/categorias-movilidad.component';
import { ConveniosComponent } from './components/convenios/convenios.component';

// servicios
import { AuthGuardService } from 'app/services/auth-guard/auth-guard.service';
import { GetUserDataService } from 'app/services/get-user-data/get-user-data.service';
import { DataService } from 'app/services/data-service/data.service';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    DocentesSalientesComponent,
    EstudiantesSalientesComponent,
    DocentesEntrantesComponent,
    EstudiantesEntrantesComponent,
    NavComponent,
    LoginComponent,
    CategoriasMovilidadComponent,
    ConveniosComponent
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
    AuthGuardService,
    GetUserDataService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

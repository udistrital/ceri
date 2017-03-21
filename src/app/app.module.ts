import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { DocentesSalientesComponent } from './components/docentes-salientes/docentes-salientes.component';
import { EstudiantesSalientesComponent } from './components/estudiantes-salientes/estudiantes-salientes.component';
import { DocentesEntrantesComponent } from './components/docentes-entrantes/docentes-entrantes.component';
import { EstudiantesEntrantesComponent } from './components/estudiantes-entrantes/estudiantes-entrantes.component';
import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    DocentesSalientesComponent,
    EstudiantesSalientesComponent,
    DocentesEntrantesComponent,
    EstudiantesEntrantesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

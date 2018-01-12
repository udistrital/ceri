import { Route } from '@angular/router';

import { AuthGuardService } from 'app/services/auth-guard/auth-guard.service';

import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { DocentesSalientesComponent } from './components/docentes-salientes/docentes-salientes.component';
import { EstudiantesSalientesComponent } from './components/estudiantes-salientes/estudiantes-salientes.component';
import { DocentesEntrantesComponent } from './components/docentes-entrantes/docentes-entrantes.component';
import { EstudiantesEntrantesComponent } from './components/estudiantes-entrantes/estudiantes-entrantes.component';
import { LoginComponent } from 'app/components/login/login.component';
import { CategoriasMovilidadComponent } from './components/categorias-movilidad/categorias-movilidad.component';
import { ConveniosComponent } from './components/convenios/convenios.component';

export const routes: Route[] = [
    { path: '', redirectTo: '/login', pathMatch: 'full'},
    { path: 'login', component: LoginComponent },
    { path: 'landing', component: LandingComponent },
    { path: 'docentes-salientes', component: DocentesSalientesComponent },
    { path: 'estudiantes-salientes', component: EstudiantesSalientesComponent },
    { path: 'docentes-entrantes', component: DocentesEntrantesComponent },
    { path: 'estudiantes-entrantes', component: EstudiantesEntrantesComponent },
    { path: 'categorias-movilidad', component: CategoriasMovilidadComponent },
    { path: 'convenios', component: ConveniosComponent }
];

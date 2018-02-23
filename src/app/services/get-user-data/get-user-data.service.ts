import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class GetUserDataService {

  private oas_service_url = 'http://localhost:8080/v1/';
  private reporte_movilidad_url = 'http://localhost:8081/v1/';

  constructor(
    private http: HttpClient
  ) { }

  // retorna los datos de un estudiante
  getDataEstudiante(query = ''): any {
    return this.http.get(`${this.oas_service_url}persona/${query}`)
      .map( res => {
        return res;
      });
  }

  // retorna los datos de un docente
  getDataDocente(query = ''): any {
    return this.http.get(`${this.oas_service_url}persona/${query}`)
      .map( res => {
        return res;
      });
  }

}

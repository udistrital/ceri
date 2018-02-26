import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class DataService {

  /*
  private categorias_movilidad_docentes_salientes = [
    {
      'id': 1,
      'valor': 'Estudios de Doctorado'
    },
    {
      'id': 2,
      'valor': 'Curso corto'
    },
    {
      'id': 3,
      'valor': 'Estancia académica'
    },
    {
      'id': 4,
      'valor': 'Estancia de investigación - creación'
    },
    {
      'id': 5,
      'valor': 'Misión académica'
    },
    {
      'id': 6,
      'valor': 'Formación postgradual en estudios de Maestría'
    },
    {
      'id': 7,
      'valor': 'Formación postgradual en estudios de doctorado'
    },
    {
      'id': 8,
      'valor': 'Formación postgradual en estudios de post doctorado'
    },
    {
      'id': 9,
      'valor': 'Actividades académicas en el marco de becas o convocatorias'
    },
    {
      'id': 10,
      'valor': 'Representaciones en eventos académicos'
    },
    {
      'id': 11,
      'valor': 'Representación en eventos científicos (investigación e investigación-creación)'
    },
    {
      'id': 12,
      'valor': 'Representación en eventos culturales y artísticos'
    },
    {
      'id': 13,
      'valor': 'Representación en eventos deportivos'
    },
    {
      'id': 14,
      'valor': 'Par académico'
    }
  ];

  private categorias_movilidad_estudiantes = [
    {
      'id': 1,
      'valor': 'Representación académica en eventos académicos / científicos'
    },
    {
      'id': 2,
      'valor': 'Representación académica en eventos artísticos'
    },
    {
      'id': 3,
      'valor': 'Representación académica en eventos deportivos'
    },
    {
      'id': 4,
      'valor': 'Curso corto'
    },
    {
      'id': 5,
      'valor': 'Práctica'
    },
    {
      'id': 6,
      'valor': 'Pasantía'
    },
    {
      'id': 7,
      'valor': 'Semestre académico'
    },
    {
      'id': 8,
      'valor': 'Intercambio'
    },
    {
      'id': 9,
      'valor': 'Rotaciones médicas'
    },
    {
      'id': 10,
      'valor': 'Doble titulación'
    },
    {
      'id': 11,
      'valor': 'Co-titulación o titulación conjunta'
    },
    {
      'id': 12,
      'valor': 'Actividades académicas en el marco de becas o convocatorias'
    }
  ];
  */

  private oas_service_url = 'http://localhost:8080/v1/';
  private reporte_movilidad_url = 'http://localhost:8081/v1/';

  constructor(
    private http: HttpClient
  ) { }

  /* OAS SERVICE */

  // retorna las dependencias
  getDependencias(): Observable<any> {
    return this.http.get(`${this.oas_service_url}dependencia`)
      .map( res => {
        return res;
      });
  }

  // retorna las intituciones
  getInstituciones(): Observable<any> {
    return this.http.get(`${this.oas_service_url}institucion`)
      .map( res => {
        return res;
      });
  }

  // retorna los paises
  getPaises(): Observable<any> {
    return this.http.get(`${this.oas_service_url}pais`)
      .map( res => {
        return res;
      });
  }

  /* REPORTE MOVILIDAD SERVICE */

  // retorna los convenios
  getConvenios(query = ''): Observable<any> {
    return this.http.get(`${this.reporte_movilidad_url}convenio/${query}`)
      .map( res => {
        return res;
      });
  }

  // agrega convenios
  insertConvenio(convenio: any): any {
    const body = JSON.stringify(convenio);

    return this.http.post(`${this.reporte_movilidad_url}convenio`, body)
      .map(res => {
        return res;
      });
  }

  // edita el convenio
  editConvenio(id: number, convenio: any): any {
    const body = JSON.stringify(convenio);

    return this.http.put(`${this.reporte_movilidad_url}convenio/${id}`, body)
      .map(res => {
        return res;
      });
  }

  // retorna las categorias de movilidad
  getCategoriasMovilidad(query = ''): Observable<any> {
    return this.http.get(`${this.reporte_movilidad_url}categoria_movilidad/${query}`)
      .map( res => {
        return res;
      });
  }

  // agrega una categoria de movilidad
  insertCategoriaMovilidad(categoria: any): any {
    const body = JSON.stringify(categoria);

    return this.http.post(`${this.reporte_movilidad_url}categoria_movilidad`, body)
      .map(res => {
        return res;
      });
  }

  // elimina la categoria de movilidad
  editCategoriaMovilidad(id: number, categoria: any): any {
    const body = JSON.stringify(categoria);

    return this.http.put(`${this.reporte_movilidad_url}categoria_movilidad/${id}`, body)
      .map(res => {
        return res;
      });
  }

  getClasificacionMovilidad() {
    return this.http.get(`${this.reporte_movilidad_url}clasificacion_movilidad`)
      .map( res => {
        return res;
      });
  }

  getTiposPresupuesto() {
    return this.http.get(`${this.reporte_movilidad_url}tipo_presupuesto`)
      .map( res => {
        return res;
      });
  }

  getTiposMovilidad() {
    return this.http.get(`${this.reporte_movilidad_url}tipo_movilidad`)
      .map( res => {
        return res;
      });
  }

  getTiposPersona() {
    return this.http.get(`${this.reporte_movilidad_url}tipo_persona`)
      .map( res => {
        return res;
      });
  }

  getClasificacionDuracion() {
    return this.http.get(`${this.reporte_movilidad_url}clasificacion_duracion`)
      .map( res => {
        return res;
      });
  }

  // agrega movilidad
  insertMovilidad(movilidad: any): any {
    const body = JSON.stringify(movilidad);

    return this.http.post(`${this.reporte_movilidad_url}movilidad`, body)
      .map(res => {
        return res;
      });
  }

  insertPresupuesto(presupuesto: any): any {
    const body = JSON.stringify(presupuesto);

    return this.http.post(`${this.reporte_movilidad_url}presupuesto`, body)
      .map( res => {
        return res;
      })
  }

}

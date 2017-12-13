import { Injectable } from '@angular/core';

@Injectable()
export class GetUserDataService {

  constructor() { }

  // retorna los datos de un estudiante entrante
  getDataEstudiante(id: number): any {
    let data = {};
    if (id === 123) {
      data = {
        'nombres': 'Nicolas',
        'apellidos': 'Bernal Gutierréz',
        'clasificacion_programa_academico': 'pregrado',
        'programa_academico': 'ingeniería de sistemas',
        'facultad': 'ingeniería',
        'direccion': 'calle 6 b 80 g 17',
        'telefono': '3005939218',
        'pais_procedencia': 'colombia'
      };
    } else {
      data = null;
    }

    return data
  }

  // retorna los datos de un docente entrante
  getDataDocente(id: number): any {
    let data = {};
    if (id === 123) {
      data = {
        'nombres': 'Nicolas',
        'apellidos': 'Bernal Gutierréz',
        'facultad': 'ingeniería',
        'direccion': 'calle 6 b 80 g 17',
        'telefono': '3005939218',
        'pais_procedencia': 'colombia'
      };
    } else {
      data = null;
    }

    return data
  }

}

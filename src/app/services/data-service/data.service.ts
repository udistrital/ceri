import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  private dependencias = [
    {
      'id': 1,
      'valor': 'Rectoría'
    },
    {
      'id': 2,
      'valor': 'Secretaría general - Comisiones de estudio'
    },
    {
      'id': 3,
      'valor': 'Vicerrectoría académica'
    }
  ];

  private instituciones = [
    {
      'id': 1,
      'valor': 'IES 1'
    },
    {
      'id': 2,
      'valor': 'IES 2'
    },
    {
      'id': 3,
      'valor': 'IES 3'
    }
  ]

  private paises = [
    {
      'id': 1,
      'valor': 'Colombia'
    },
    {
      'id': 2,
      'valor': 'Perú'
    },
    {
      'id': 3,
      'valor': 'México'
    }
  ];

  private categorias_movilidad_docentes_entrantes = [
    {
      'id': 1,
      'valor': 'Invitado Nacional'
    },
    {
      'id': 2,
      'valor': 'Invitado Internacional'
    },
    {
      'id': 3,
      'valor': 'Docente Visitante'
    },
    {
      'id': 4,
      'valor': 'Docente Experto'
    },
    {
      'id': 5,
      'valor': 'Actividades Académicas en el marco de becas o convocatorias'
    },
    {
      'id': 6,
      'valor': 'Residencia artística'
    },
    {
      'id': 7,
      'valor': 'Par académico'
    }
  ];

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

  constructor() { }

  // retorna las dependencias
  getDependencias(): any {
    return new Promise( (resolve, reject) => {
      resolve(this.dependencias);
    });
  }

  // retorna las intituciones
  getInstituciones(): any {
    return new Promise( (resolve, reject) => {
      resolve(this.instituciones);
    });
  }

  // retorna los paises
  getPaises(): any {
    return new Promise( (resolve, reject) => {
      resolve(this.paises);
    });
  }

  // retorna las categorias de movilidad
  getCategoriasMovilidadDocentesEntrantes(): any {
    return new Promise( (resolve, reject) => {
      resolve(this.categorias_movilidad_docentes_entrantes);
    });
  }

  // retorna las categorias de movilidad
  getCategoriasMovilidadDocentesSalientes(): any {
    return new Promise( (resolve, reject) => {
      resolve(this.categorias_movilidad_docentes_salientes);
    });
  }

  // retorna las categorias de movilidad
  getCategoriasMovilidadEstudiantes(): any {
    return new Promise( (resolve, reject) => {
      resolve(this.categorias_movilidad_estudiantes);
    });
  }

}

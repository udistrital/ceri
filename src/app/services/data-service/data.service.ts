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

  constructor() { }

  // retorna las dependencias
  getDependencias(): any {
    return this.dependencias;
  }

  // retorna las intituciones
  getInstituciones(): any {
    return this.instituciones;
  }

  // retorna los paises
  getPaises(): any {
    return this.paises;
  }

}

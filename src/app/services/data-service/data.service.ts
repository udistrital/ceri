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
  ]

  constructor() { }

  // retorna las dependencias
  getDependencias(): any {
    return this.dependencias;
  }

}

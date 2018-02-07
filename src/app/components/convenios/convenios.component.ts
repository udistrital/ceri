import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/services/data-service/data.service';

@Component({
  selector: 'app-convenios',
  templateUrl: './convenios.component.html',
  styleUrls: ['./convenios.component.css']
})
export class ConveniosComponent implements OnInit {

  private nuevo_convenio = {
    'nombre': ''
  }

  private convenios = [];

  // almacena el id del convenio a eliminar
  private id_convenio = null;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.getConvenios();
  }

  // obtiene los convenios
  getConvenios(): void {
    this.dataService.getConvenios().subscribe( (data) => {
      this.convenios = data;
    }, (error) => {
        console.log('no se pudieron obtener los convenios', error);
    });
  }

  // inserta un convenio nueva
  agregarConvenio(): void {
    const convenio = {
      'id': this.convenios.length + 1,
      'valor': this.nuevo_convenio.nombre
    }
    this.dataService.insertConvenio(convenio).then( () => {
      this.nuevo_convenio.nombre = '';
    }, (error) => {
      alert('No se pudo insertar');
    });
  }

  // guarda el convenio a eliminar
  eliminarConvenio(id: number): void {
    this.id_convenio = id;
  }

  // elimina el convenio
  confirmarEliminacion(): void {
    this.dataService.deleteConvenio(this.id_convenio).then( () => {
      alert('Convenio eliminado');
    }, (error) => {
      alert('No se pudo eliminar')
    })
  }

}

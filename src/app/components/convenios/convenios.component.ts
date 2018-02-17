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
  nombre_convenio = '';

  // almacena el id del convenio a eliminar o editar
  private convenio = null;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.getConvenios();
  }

  // obtiene los convenios
  getConvenios(): void {
    const query = '?query=disponible:true&sortby=Nombre&order=asc';
    this.dataService.getConvenios(query).subscribe( (data) => {
      this.convenios = data;
    }, (error) => {
        console.log('no se pudieron obtener los convenios', error);
    });
  }

  // inserta un convenio nueva
  agregarConvenio(): void {
    const convenio = {
      'Id': 0,
      'Nombre': this.nuevo_convenio.nombre,
      'Disponible': true
    }
    this.dataService.insertConvenio(convenio).subscribe( (data) => {
        this.convenios.push(data);
      }, (error) => {
          console.log('no se pudo insertar el convenio', error);
      });
  }

  // guarda el convenio a eliminar o editar
  seleccionarConvenio(option: string, convenio: any): void {
    if (option === 'editar') {
      this.nombre_convenio = convenio.Nombre;
    }
    this.convenio = convenio;
  }

  // edita el convenio
  confirmarEdicion(): void {
    const convenio = {
      'Disponible': true,
      'Id': this.convenio.Id,
      'Nombre': this.nombre_convenio
    }
    this.dataService.editConvenio(this.convenio.Id, convenio).subscribe( (data) => {
        this.nombre_convenio = '';
        this.getConvenios();
      }, (error) => {
          console.log('no se pudo editar el convenio', error);
      });
  }

  // elimina el convenio
  confirmarEliminacion(): void {
    const convenio = {
      'Disponible': false,
      'Id': this.convenio.Id,
      'Nombre': this.convenio.Nombre
    }
    this.dataService.editConvenio(this.convenio.Id, convenio).subscribe( (data) => {
        this.getConvenios();
      }, (error) => {
          console.log('no se pudo insertar el convenio', error);
      });
  }

}

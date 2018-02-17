import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/services/data-service/data.service';

@Component({
  selector: 'app-categorias-movilidad',
  templateUrl: './categorias-movilidad.component.html',
  styleUrls: ['./categorias-movilidad.component.css']
})
export class CategoriasMovilidadComponent implements OnInit {

  private nueva_categoria = {
    'nombre': ''
  }

  private categorias_movilidad = [];
  nombre_categoria = '';

  // almacena el id de la categoria a eliminar
  private categoria = null;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.getCategorias();
  }

  // obtiene las categorias de movilidad
  getCategorias(): void {
    const query = '?query=disponible:true&sortby=Nombre&order=asc';
    this.dataService.getCategoriasMovilidad(query).subscribe( (data) => {
      this.categorias_movilidad = data;
    }, (error) => {
        console.log('no se pudieron obtener las categorias', error);
    });
  }

  // inserta una categoria nueva
  agregarCategoria(): void {
    const categoria = {
      'Id': 0,
      'Nombre': this.nueva_categoria.nombre,
      'Disponible': true
    }
    this.dataService.insertCategoriaMovilidad(categoria).subscribe( (data) => {
      this.getCategorias();
    }, (error) => {
        console.log('no se pudo insertar la categoría', error);
    });
  }

  // guarda la categoria a eliminar o editar
  seleccionarCategoria(option: string, categoria: any): void {
    if (option === 'editar') {
      this.nombre_categoria = categoria.Nombre;
    }
    this.categoria = categoria;
  }

  // edita el convenio
  confirmarEdicion(): void {
    const categoria = {
      'Disponible': true,
      'Id': this.categoria.Id,
      'Nombre': this.nombre_categoria
    }
    this.dataService.editCategoriaMovilidad(this.categoria.Id, categoria).subscribe( (data) => {
      this.nombre_categoria = '';
      this.getCategorias();
    }, (error) => {
        console.log('no se pudo editar el convenio', error);
    });
  }

  // elimina la categoria
  confirmarEliminacion(): void {
    const categoria = {
      'Disponible': false,
      'Id': this.categoria.Id,
      'Nombre': this.categoria.Nombre
    }
    this.dataService.editCategoriaMovilidad(this.categoria.Id, categoria).subscribe( (data) => {
      this.getCategorias();
    }, (error) => {
        console.log('no se pudo insertar el convenio', error);
    });
  }

}

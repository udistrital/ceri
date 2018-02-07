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

  // almacena el id de la categoria a eliminar
  private id_categoria = null;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.getCategorias();
  }

  // obtiene las categorias de movilidad
  getCategorias(): void {
    this.dataService.getCategoriasMovilidad().subscribe( (data) => {
      this.categorias_movilidad = data;
    }, (error) => {
        console.log('no se pudieron obtener las categorias', error);
    });
  }

  // inserta una categoria nueva
  agregarCategoria(): void {
    const categoria = {
      'id': this.categorias_movilidad.length + 1,
      'valor': this.nueva_categoria.nombre
    }
    this.dataService.insertCategoriaMovilidad(categoria).then( () => {
      this.nueva_categoria.nombre = '';
    }, (error) => {
      alert('No se pudo insertar');
    });
  }

  // guarda la categoria a eliminar
  eliminarCategoria(id: number): void {
    this.id_categoria = id;
  }

  // elimina la categoria
  confirmarEliminacion(): void {
    this.dataService.deleteCategoriaMovilidad(this.id_categoria).then( () => {
      alert('Categoría eliminada');
    }, (error) => {
      alert('No se pudo eliminar')
    })
  }

}

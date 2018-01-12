import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categorias-movilidad',
  templateUrl: './categorias-movilidad.component.html',
  styleUrls: ['./categorias-movilidad.component.css']
})
export class CategoriasMovilidadComponent implements OnInit {

  private categoria = {
    'nombre': ''
  }

  constructor() { }

  ngOnInit() {
  }

}

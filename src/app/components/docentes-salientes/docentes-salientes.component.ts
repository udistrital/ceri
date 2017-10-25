import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-docentes-salientes',
    templateUrl: 'docentes-salientes.component.html'
})
export class DocentesSalientesComponent implements OnInit {

    is_search = false;

    identificacion = {
        'numero': null
    };

    datos_persona = {
        'identificacion': 20121020079,
        'nombres': 'Catalina',
        'apellidos': 'Cano',
        'codigo_snies': 123456,
        'facultad': 'Ingenieria',
        'direccion': 'calle 6',
        'telefono': 123
    };

    datos_movilidad = {
        'tipo_movilidad': 'nacional',
        'fecha_inicio': '',
        'fecha_fin': '',
        'periodo_estancia': 'corto',
        'categoria_movilidad': 1,
        'pais_destino': 'colombia',
        'institucion': '',
        'presupuesto': null,
        'nombre_acto_administrativo': '',
        'enlace_acto_administrativo': ''
    };

    constructor() { }

    ngOnInit() { }

    search(): void {
        this.is_search = true;
    }
}

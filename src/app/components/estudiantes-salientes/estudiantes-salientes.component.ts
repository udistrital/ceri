import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-estudiantes-salientes',
    templateUrl: 'estudiantes-salientes.component.html'
})
export class EstudiantesSalientesComponent implements OnInit {

    is_search = false;

    identificacion = {
        'numero': null
    };

    datos_persona = {
        'identificacion': 20121020079,
        'nombres': 'Catalina',
        'apellidos': 'Cano',
        'clasificacion_programa_academico': 'Pregrado',
        'programa_academico': 'Ingenieria de Sistemas',
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
        'convenio': '',
        'institucion': '',
        'presupuesto': [],
        'nombre_acto_administrativo': '',
        'enlace_acto_administrativo': ''
    };

    tipos_presupuesto = [
        {
            'nombre': 'Apoyo económico por parte de la institución',
            'campo': 'presupuesto'
        },
        {
            'nombre': 'Recursos propios',
            'campo': 'descripcion'
        },
        {
            'nombre': 'Beca externa',
            'campo': 'descripcion'
        }
    ];

    presupuesto_seleccionado = {
        'tipo': null,
        'descripcion': null
    };

    agregarPresupuesto(): void {
        this.datos_movilidad.presupuesto.push(this.presupuesto_seleccionado);
        this.presupuesto_seleccionado = {
            'tipo': null,
            'descripcion': null
        };
    }

    constructor() { }

    ngOnInit() { }

    search(): void {
        this.is_search = true;
    }

}

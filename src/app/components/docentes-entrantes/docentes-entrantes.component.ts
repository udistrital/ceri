import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-docentes-entrantes',
    templateUrl: 'docentes-entrantes.component.html'
})
export class DocentesEntrantesComponent implements OnInit {

    identificacion = {
        'numero': null
    };

    datos_persona = {
        'identificacion': 20121020079,
        'nombres': 'Catalina',
        'apellidos': 'Cano',
        'pais_procedencia': 'Argentina'
    };

    datos_movilidad = {
        'tipo_movilidad': 'nacional',
        'fecha_inicio': '',
        'fecha_fin': '',
        'periodo_estancia': 'corto',
        'categoria_movilidad': 1,
        'dependencia': 1,
        'area_conocimiento': '',
        'concepto_participacion': '',
        'presupuesto': null,
        'acto_administrativo': null
    };

    constructor() { }

    ngOnInit() {}
}

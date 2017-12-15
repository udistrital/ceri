import { Component, OnInit } from '@angular/core';
import { GetUserDataService } from 'app/services/get-user-data/get-user-data.service';
import { DataService } from 'app/services/data-service/data.service';

@Component({
    moduleId: module.id,
    selector: 'app-docentes-entrantes',
    templateUrl: 'docentes-entrantes.component.html'
})
export class DocentesEntrantesComponent implements OnInit {

    numero_identificacion = {
        'numero': null
    };

    datos_persona = null;

    datos_movilidad = {
        'tipo_movilidad': 'nacional',
        'fecha_inicio': '',
        'fecha_fin': '',
        'periodo_estancia': 'corto',
        'categoria_movilidad': '',
        'dependencia': '',
        'area_conocimiento': '',
        'concepto_participacion': '',
        'presupuesto': [],
        'nombre_acto_administrativo': '',
        'enlace_acto_administrativo': ''
    };

    dependencias = [];

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

    constructor(
        private getUserDataService: GetUserDataService,
        private dataService: DataService
    ) { }

    ngOnInit() {
        this.dependencias = this.dataService.getDependencias();
    }

    search(): void {
        console.log(this.numero_identificacion.numero);
        this.datos_persona = this.getUserDataService.getDataDocente(this.numero_identificacion.numero);
    }

    agregarPresupuesto(): void {
        this.datos_movilidad.presupuesto.push(this.presupuesto_seleccionado);
        this.presupuesto_seleccionado = {
            'tipo': null,
            'descripcion': null
        };
    }
}

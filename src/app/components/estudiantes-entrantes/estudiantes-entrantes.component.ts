import { Component, OnInit } from '@angular/core';
import { GetUserDataService } from 'app/services/get-user-data/get-user-data.service';
import { DataService } from 'app/services/data-service/data.service';

@Component({
    moduleId: module.id,
    selector: 'app-estudiantes-entrantes',
    templateUrl: 'estudiantes-entrantes.component.html'
})
export class EstudiantesEntrantesComponent implements OnInit {

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
        'pais_origen': '',
        'convenio': '',
        'institucion': '',
        'presupuesto': [],
        'nombre_acto_administrativo': '',
        'enlace_acto_administrativo': ''
    };

    // por servicio
    instituciones = [];
    paises = [];
    categorias_movilidad = [];

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
    ) {
    }

    ngOnInit() {
        this.dataService.getInstituciones().then((data) => {
            this.instituciones = data;
        }, (error) => {
            console.log('error', error);
        });
        this.dataService.getPaises().then((data) => {
            this.paises = data;
        }, (error) => {
            console.log('error', error);
        });
        this.dataService.getCategoriasMovilidadEstudiantes().then((data) => {
            this.categorias_movilidad = data;
        }, (error) => {
            console.log('error', error);
        });
    }

    search(): void {
        this.getUserDataService.getDataEstudiante(this.numero_identificacion.numero).then( (data) => {
            this.datos_persona = data;
        }, (error) => {
            console.log('error', error);
        });
    }

    agregarPresupuesto(): void {
        this.datos_movilidad.presupuesto.push(this.presupuesto_seleccionado);
        this.presupuesto_seleccionado = {
            'tipo': null,
            'descripcion': null
        };
    }
}

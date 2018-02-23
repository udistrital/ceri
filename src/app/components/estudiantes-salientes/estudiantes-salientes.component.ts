import { Component, OnInit } from '@angular/core';
import { GetUserDataService } from 'app/services/get-user-data/get-user-data.service';
import { DataService } from 'app/services/data-service/data.service';

@Component({
    moduleId: module.id,
    selector: 'app-estudiantes-salientes',
    templateUrl: 'estudiantes-salientes.component.html'
})
export class EstudiantesSalientesComponent implements OnInit {

    numero_identificacion = {
        'numero': null,
        'ultima_busqueda': null
    };

    datos_persona = null;

    datos_movilidad = {
        'tipo_movilidad': 'nacional',
        'fecha_inicio': '',
        'fecha_fin': '',
        'periodo_estancia': '',
        'categoria_movilidad': '',
        'pais_destino': '',
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
    convenios = [];

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
        this.dataService.getInstituciones().subscribe( (data) => {
            this.instituciones = data;
        }, (error) => {
            console.log('error', error);
        });
        this.dataService.getPaises().subscribe( (data) => {
            this.paises = data;
        }, (error) => {
            console.log('error', error);
        });

        const query = '?query=disponible:true&sortby=Nombre&order=asc';
        this.dataService.getCategoriasMovilidad(query).subscribe( (data) => {
            this.categorias_movilidad = data;
        }, (error) => {
            console.log('error', error);
        });
        this.dataService.getConvenios(query).subscribe( (data) => {
            this.convenios = data;
        }, (error) => {
            console.log('error', error);
        });
    }

    // busca el usuario
    search(): void {
        this.numero_identificacion.ultima_busqueda = this.numero_identificacion.numero;
        const query = `?query=Documento:${this.numero_identificacion.numero}`
        this.getUserDataService.getDataEstudiante(query).subscribe( (data) => {
            this.datos_persona = data;
            this.numero_identificacion.numero = '';
        }, (error) => {
            console.log('error', error);
        });
    }

    // agrega un presupuesto
    agregarPresupuesto(): void {
        this.datos_movilidad.presupuesto.push(this.presupuesto_seleccionado);
        this.presupuesto_seleccionado = {
            'tipo': null,
            'descripcion': null
        };
    }

    // eliminar presupuesto
    eliminarPresupuesto(index: number): void {
        this.datos_movilidad.presupuesto.splice(index, 1);
    }

    // calcula la duración de la estancia
    calcularDuracionEstancia(): void {
        if (this.datos_movilidad.fecha_inicio !== '' && this.datos_movilidad.fecha_fin !== '') {
            const fecha_inicio = this.datos_movilidad.fecha_inicio.split('-');
            const fecha_fin = this.datos_movilidad.fecha_fin.split('-');
            let duracion = (parseInt(fecha_fin[0], 10) - parseInt(fecha_inicio[0], 10)) * 12;
            duracion -= parseInt(fecha_inicio[1], 10);
            duracion += parseInt(fecha_fin[1], 10);
            if (duracion <= 2) {
                this.datos_movilidad.periodo_estancia = 'corta';
            } else if (duracion <= 12) {
                this.datos_movilidad.periodo_estancia = 'mediana';
            } else {
                this.datos_movilidad.periodo_estancia = 'larga';
            }
        }
    }

}

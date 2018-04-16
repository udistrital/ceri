import { Component, OnInit } from '@angular/core';
import { GetUserDataService } from 'app/services/get-user-data/get-user-data.service';
import { DataService } from 'app/services/data-service/data.service';

declare var $: any;

@Component({
    moduleId: module.id,
    selector: 'app-docentes-salientes',
    templateUrl: 'docentes-salientes.component.html'
})
export class DocentesSalientesComponent implements OnInit {

    numero_identificacion = {
        'numero': null,
        'ultima_busqueda': null
    };

    datos_persona = null;

    datos_movilidad = {
        'AreaConocimiento': '', // otro component
        'CategoriaMovilidad': null,
        'ClasificacionDuracion': {},
        'ClasificacionMovilidad': {},
        'ConceptoParticipacion': '',
        'Convenio': null,
        'Dependencia': null, // otro component
        'EnlaceActoAdministrativo': '',
        'FechaFin': '',
        'FechaInicio': '',
        'Id': 0,
        'Institucion': null,
        'NombreActoAdministrativo': '',
        'Pais': null,
        'Persona': '',
        'TipoMovilidad': {},
        'TipoPersona': {}
    };

    presupuestos = [];

    // por servicio
    instituciones = [];
    paises = [];
    categorias_movilidad = [];
    clasificacion_movilidad: any = [];
    tipos_presupuesto: any = [];
    tipos_movilidad: any = [];
    tipos_persona: any = [];
    clasificacion_duracion: any = [];

    presupuesto_seleccionado = {
        'TipoPresupuesto': null,
        'Descripcion': null,
        'Movilidad': null,
        'Id': 0
    };

    mensaje_confirmacion = '';
    nueva_busqueda = false;
    tipo_movilidad = 'saliente';

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
        this.dataService.getClasificacionMovilidad().subscribe( (data) => {
            this.clasificacion_movilidad = data;
        }, (error) => {
            console.log('error', error);
        });
        this.dataService.getTiposPresupuesto().subscribe( (data) => {
            this.tipos_presupuesto = data;
        }, (error) => {
            console.log('error', error);
        });
        this.dataService.getTiposMovilidad().subscribe( (data) => {
            this.tipos_movilidad = data;
        }, (error) => {
            console.log('error', error);
        });
        this.dataService.getTiposPersona().subscribe( (data) => {
            this.tipos_persona = data;
        }, (error) => {
            console.log('error', error);
        });
        this.dataService.getClasificacionDuracion().subscribe( (data) => {
            this.clasificacion_duracion = data;
        }, (error) => {
            console.log('error', error);
        });
     }

    // busca el usuario
    search(): void {
        this.numero_identificacion.ultima_busqueda = this.numero_identificacion.numero;
        const query = `?query=Documento:${this.numero_identificacion.numero}`
        this.getUserDataService.getDataDocente(query).subscribe( (data) => {
            this.datos_persona = data;
            this.numero_identificacion.numero = '';
            this.nueva_busqueda = true;
        }, (error) => {
            console.log('error', error);
        });
    }

    // agrega un presupuesto
    agregarPresupuesto(): void {
        this.presupuesto_seleccionado['TipoPresupuesto'] = this.tipos_presupuesto[this.tipos_presupuesto.findIndex(
            presupuesto => presupuesto.Id === this.presupuesto_seleccionado.TipoPresupuesto
        )];
        this.presupuestos.push(this.presupuesto_seleccionado);
        this.presupuesto_seleccionado = {
            'TipoPresupuesto': null,
            'Descripcion': null,
            'Movilidad': null,
            'Id': 0
        };
    }

    // eliminar presupuesto
    eliminarPresupuesto(index: number): void {
        this.presupuestos.splice(index, 1);
    }

    // calcula la duración de la estancia
    calcularDuracionEstancia(inicio = false): void {
        if (inicio) {
            this.datos_movilidad.FechaFin = '';
        }

        if (this.datos_movilidad.FechaInicio !== '' && this.datos_movilidad.FechaFin !== '') {
            const fecha_inicio = this.datos_movilidad.FechaInicio.split('-');
            const fecha_fin = this.datos_movilidad.FechaFin.split('-');
            let duracion = (parseInt(fecha_fin[0], 10) - parseInt(fecha_inicio[0], 10)) * 12;
            duracion -= parseInt(fecha_inicio[1], 10);
            duracion += parseInt(fecha_fin[1], 10);
            if (duracion <= 2) {
                this.datos_movilidad.ClasificacionDuracion = this.clasificacion_duracion[this.clasificacion_duracion.findIndex(
                    clasificacion => clasificacion.Nombre === 'corta'
                )];
            } else if (duracion <= 12) {
                this.datos_movilidad.ClasificacionDuracion = this.clasificacion_duracion[this.clasificacion_duracion.findIndex(
                    clasificacion => clasificacion.Nombre === 'mediana'
                )];
            } else {
                this.datos_movilidad.ClasificacionDuracion = this.clasificacion_duracion[this.clasificacion_duracion.findIndex(
                    clasificacion => clasificacion.Nombre === 'larga'
                )];
            }
        }
    }

    calcularTipoMovilidad(): void {
        let id_pais = 0;
        if (this.tipo_movilidad === 'saliente') {
            const index = this.paises.findIndex( pais => pais.Nombre === 'Colombia');
            if (index >= 0) {
                id_pais = this.paises[index].Id;
            }
        } else {
            const index = this.paises.findIndex( pais => pais.Nombre === this.datos_persona[0].PaisProcedencia);
            if (index >= 0) {
                id_pais = this.paises[index].Id;
            }
        }
        if (parseInt(this.datos_movilidad.Pais, 10) === id_pais) {
            this.datos_movilidad.TipoMovilidad = this.tipos_movilidad[this.tipos_movilidad.findIndex(
                tipo => tipo.Nombre === 'nacional'
            )];
        } else {
            this.datos_movilidad.TipoMovilidad = this.tipos_movilidad[this.tipos_movilidad.findIndex(
                tipo => tipo.Nombre === 'internacional'
            )];
        }
    }

    guardarMovilidad(): void {

        this.verificarFechaMovilidad(this.datos_persona[0].Id).then( data => {
            return this.guardarDatosMovilidad();
        }).then( (data) => {
            const promises = [];
            for (const presupuesto of this.presupuestos) {
                presupuesto['Movilidad'] = data;
                promises.push(this.guardarPresupuesto(presupuesto));
            }
            return Promise.all(promises);
       }).then( (data) => {
            this.mensaje_confirmacion = 'Se ha registrado la movilidad exitosamente';
            $('#modalConfirmacion').modal({ backdrop: 'static', keyboard: false });
            this.clearData();
       })
       .catch( (error) => {
            if (error === 'date') {
                this.mensaje_confirmacion = 'Ya existe una movilidad registrada en el mismo periodo de tiempo';
                $('#modalConfirmacion').modal({ backdrop: 'static', keyboard: false });
            } else {
                this.mensaje_confirmacion = 'No se ha podido registrar la movilidad intentelo nuevamente';
                $('#modalConfirmacion').modal({ backdrop: 'static', keyboard: false });
            }
       })

    }

    verificarFechaMovilidad(persona): Promise<any> {
        return new Promise( (resolve, reject) => {
            this.dataService.getMovilidad(persona).subscribe( data => {
                const movilidades = data;
                // si no hay movilidades previas
                if (movilidades === null) {
                    resolve();
                } else {
                    let cantidad_movilidades = 0;
                    let cantidad_comparaciones_correctas = 0;
                    for (const movilidad of Object.keys(movilidades)) {
                        cantidad_movilidades++;
                        if (
                            this.datos_movilidad.FechaInicio < movilidades[movilidad].FechaInicio
                            && this.datos_movilidad.FechaFin < movilidades[movilidad].FechaInicio
                        ) {
                            cantidad_comparaciones_correctas++;
                        } else if (
                            this.datos_movilidad.FechaInicio > movilidades[movilidad].FechaFin
                            && this.datos_movilidad.FechaFin > movilidades[movilidad].FechaFin
                        ) {
                            cantidad_comparaciones_correctas++;
                        }
                    }
                    if (cantidad_movilidades === cantidad_comparaciones_correctas) {
                        resolve();
                    } else {
                        reject('date');
                    }
                }
            });
        })
    }

    guardarDatosMovilidad(): Promise<any> {
        return new Promise( (resolve, reject) => {
            this.datos_movilidad.ClasificacionMovilidad = this.clasificacion_movilidad[this.clasificacion_movilidad.findIndex(
                movilidad => movilidad.Nombre === 'saliente'
            )];

            this.datos_movilidad.Persona = this.datos_persona[0].Id;

            this.datos_movilidad.TipoPersona = this.tipos_persona[this.tipos_persona.findIndex(
                tipo => tipo.Nombre === 'estudiante'
            )];

            this.datos_movilidad.Institucion = parseInt(this.datos_movilidad.Institucion, 10);
            this.datos_movilidad.Pais = parseInt(this.datos_movilidad.Pais, 10);

            this.dataService.insertMovilidad(this.datos_movilidad).subscribe( (data) => {
                console.log('movilidad insert', data);
                resolve(data);
              }, (error) => {
                  reject('no se pudo insertar los datos de movilidad ' + error);
              });
        });
    }

    guardarPresupuesto(presupuesto: any): Promise<any> {
        return new Promise( (resolve, reject) => {
            this.dataService.insertPresupuesto(presupuesto).subscribe( (data) => {
                resolve(data);
            }, (error) => {
                reject('no se pudo insertar el presupuesto ' + error);
            });
        });
    }

    clearData(): void {
        this.numero_identificacion = {
            'numero': null,
            'ultima_busqueda': null
        };

        this.datos_persona = null;

        this.datos_movilidad = {
            'AreaConocimiento': '', // otro component
            'CategoriaMovilidad': null,
            'ClasificacionDuracion': {},
            'ClasificacionMovilidad': {},
            'ConceptoParticipacion': '',
            'Convenio': null,
            'Dependencia': null, // otro component
            'EnlaceActoAdministrativo': '',
            'FechaFin': '',
            'FechaInicio': '',
            'Id': 0,
            'Institucion': null,
            'NombreActoAdministrativo': '',
            'Pais': null,
            'Persona': '',
            'TipoMovilidad': {},
            'TipoPersona': {}
        };

        this.presupuestos = [];

        this.nueva_busqueda = false;
    }

}

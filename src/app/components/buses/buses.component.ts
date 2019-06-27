import { Component, OnInit } from '@angular/core';
import { BusesService } from '../../services/buses.service';
import { Ciudad } from '../../models/ciudad';
import { BusesResults } from '../../models/BusesResults';
import { element } from 'protractor';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-buses',
  templateUrl: './buses.component.html',
  styleUrls: ['./buses.component.css']
})
export class BusesComponent implements OnInit {

  results: BusesResults[];
  ciudades: Ciudad[];
  tipo = 1;
  mostrar = true;
  mostrardiv = false;
  Listaciudad: any[] = [];
  divcodecity: boolean = false;
  namecity: string;

  SearchObj: any = {
    fecha: '30/06/2019',
    origen: '',
    destino: ''
  };

  CodeObj: any = {
    codeorigen: '',
    codedestino: ''
  }

  constructor(public service: BusesService) { }

  ngOnInit() {
    this.GetCiudad();
  }

  GetCiudad() {
    this.service.GetCiudades().subscribe(data => {
      this.ciudades = data;
      console.log(data);
    });
  }

  SearchBus() {
    this.service.SearchBus(this.SearchObj).subscribe(data => {
      this.results = data;
      console.log(data);
    });
  }

  Filtrar() {

  }

  MostrarCiudades(type) {
    let city;
    let exito;
    const nRegisters = this.ciudades.length;
    const valorText = this.CodeObj.codeorigen;
    const valordestino = this.CodeObj.codedestino; // valor del texto
    const listado: any[] = [];
    if (type === 1) {
      if (nRegisters > 0) {
        for (let index = 0; index < nRegisters; index++) {
          city = this.ciudades[index];
          exito = valorText === '' || city.diata.toLowerCase().indexOf(valorText.toLowerCase()) > -1;
          if(exito) {
            const obj = {
              codigo: city.ciata,
              ciudad: city.diata
            };
            listado.push(obj);
            console.log(listado);
          }
        }
      }
    }
    if (type === 2) {
      if (nRegisters > 0) {
        for (let index = 0; index < nRegisters; index++) {
          city = this.ciudades[index];
          exito = valordestino === '' || city.diata.toLowerCase().indexOf(valordestino.toLowerCase()) > -1;
          if(exito) {
            const obj = {
              codigo: city.ciata,
              ciudad: city.diata
            };
            listado.push(obj);
            console.log(listado);
          }
        }
      }
    }
    this.Listaciudad = listado;
    console.log(this.Listaciudad);
    //this.mostrardiv = true;
    if (type === 1) {
      $('#divCity').show();
    }
   if(type === 2) {
    $('#divCitydestino').show();
   }
  }

  ConfigurarFiltro() {

  }

  /*
  MostrarCiudades() {
    this.mostrardiv = true;
  }
*/

  isChecked(tipo: number) {
   if (tipo === 1) {
     this.tipo = 1;
   }
   if (tipo === 2) {
     this.tipo = 2;
   }
  }

  eventoNameCity(event) {
    this.CodeObj.codeorigen = event;
    $('#divCity').hide();
  //  let destino = this.SearchObj.HotelCityCode;
  }

  eventoCodeCity(event) {
    this.SearchObj.origen = event;
  }

  eventoNameCityDes(event) {
    this.CodeObj.codedestino = event;
    $('#divCitydestino').hide();
  }
 
  eventoCodeCityDes(event) {
    this.SearchObj.destino = event;
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { VueloService } from '../../services/vuelo.service';
import { VuelosResults } from '../../models/VuelosResults';
import { type } from 'os';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

// tslint:disable-next-line: no-inferrable-types
  estado: boolean = true;
  tipo = 1;
// tslint:disable-next-line: variable-name
  filtros_active = true;
  resultados = false;
  opciones = false;
  mostrar = true;
  ocultar = false;
  status = false;
  mostrar1 = true;
  ocultar1 = false;
  contenido: string;
  detalle = false;
  result: VuelosResults[];
  MatrizAirport: any[] = [];
  MatrizAirport2: any[] = [];
  MatrizAirportGeneral: any[] = [];
  stringAirport: string;
  fchIni: string;
  fchFin: string;

  searchObj: any = {
    TypeFlight: 'RT',
    Origin: [],
    Destination: [],
    DepartureArrivalDate: ['2019/06/30','2019/07/05'],
    DepartureArrivalTimeFrom: ['', ''],
    DepartureArrivalTimeTo: ['', ''],
    NumberPassengers: '1',
    CabinType: '',
    Company: 'ServicesFabric.SigvPlus',
    Pseudo: ['LIMPE2235', 'BOGZ128G2', 'PTY1S2109'],
    Currency: 'USD',
    UserDemo: 1,
    NumberRecommendations: '100'
  };

  dateObj: any = {
    fechaini: '',
    fechafin: ''
  };

  ciudadObj: any = {
    salida: '',
    llegada: ''
  }

  constructor(public service: VueloService) { }


  ngOnInit() {
    this.FilterAirport();
  }

  SearchFlight() {
   // this.searchObj.DepartureArrivalDate.push(this.dateObj.fechaini);
   // this.searchObj.DepartureArrivalDate.push(this.dateObj.fechafin);
   this.searchObj.Origin.push(this.ciudadObj.salida);
   if (this.searchObj.TypeFlight === 'RT') {
    this.searchObj.Origin.push(this.ciudadObj.llegada);
   }
   this.searchObj.Destination.push(this.ciudadObj.llegada);
   if (this.searchObj.TypeFlight === 'RT') {
      this.searchObj.Destination.push(this.ciudadObj.salida);
     }

   this.service.SearchFlight(this.searchObj).subscribe(data => {
      this.result = data;
      console.log(data);
    });
}

FilterAirport() {
  this.searchObj.Origin.push();
  this.searchObj.Destination.push();
  this.service.FilterAirport().subscribe(data => {
    console.log(data);
    this.showAirport(data);
  });
}

 showAirport(rpta) {
  this.stringAirport = rpta.data.split('¬');
  this.CreateMatrizAirportGeneral();
}

CreateMatrizAirportGeneral() {
const nAirport = this.stringAirport.length;
let count = 0;
let campos;
let nCampos;
const exito = true;
for (let i = 0; i < nAirport; i++) {
    campos = this.stringAirport[i].split('|');
    nCampos = campos.length;
    if (exito) {
       this. MatrizAirportGeneral[count] = [];
       for (let j = 0; j < nCampos; j++) {
            this.MatrizAirportGeneral[count][j] = campos[j];
        }
       count++;
    }
}
}

FilterMatrizAirport(txt, div, type) {
this.CreateMatrizAirport(txt, type);
this.ShowMatrizAirport(div);
}

CreateMatrizAirport(txt, type) {
this.MatrizAirport = [];

let listado2: any[] = [];
//this.flagMatrizAirport2 = false;

const nAirport = this.stringAirport.length;
let count = 0;
let campos;
let nCampos;
let exito;
let campoEvaluar = '';
let txtFiltro = '';

if (type === 1) {
  if (txt !== null) {
    txtFiltro = this.ciudadObj.salida;
      //txtFiltro = (document.getElementById(txt) as HTMLInputElement).value;
  }
  for (let i = 0; i < nAirport; i++) {
      campos = this.stringAirport[i].split('|');
      nCampos = campos.length;
      campoEvaluar = '[';
      campoEvaluar += campos[3].toUpperCase(); // CodeCity
      campoEvaluar += '] ';
      campoEvaluar += campos[0].toUpperCase(); // NameAirPort
      campoEvaluar += ' - ';
      campoEvaluar += campos[1].toUpperCase(); // NameCity
      campoEvaluar += ' - ';
      campoEvaluar += campos[2].toUpperCase(); // NameCountry
      exito = txtFiltro === '' || campoEvaluar.toLowerCase().indexOf(txtFiltro.toLowerCase()) > -1;
      if (exito) {
          this.MatrizAirport[count] = [];
          for (let j = 0; j < nCampos; j++) {
              this.MatrizAirport[count][j] = campos[j];
          }
          let obj = {
            valor1: campos[0],
            valor2: campos[1],
            valor3: campos[2],
            valor4: campos[3],
            valor5: campos[4],
            valor6: campos[5],
            valor7: campos[6],
            valor8: campoEvaluar
          };
  
          listado2.push(obj);
          count++;
      }
  }
}

if (type === 2) {
  if (txt !== null) {
    txtFiltro = this.ciudadObj.llegada;
      //txtFiltro = (document.getElementById(txt) as HTMLInputElement).value;
  }
  for (let i = 0; i < nAirport; i++) {
      campos = this.stringAirport[i].split('|');
      nCampos = campos.length;
      campoEvaluar = '[';
      campoEvaluar += campos[3].toUpperCase(); // CodeCity
      campoEvaluar += '] ';
      campoEvaluar += campos[0].toUpperCase(); // NameAirPort
      campoEvaluar += ' - ';
      campoEvaluar += campos[1].toUpperCase(); // NameCity
      campoEvaluar += ' - ';
      campoEvaluar += campos[2].toUpperCase(); // NameCountry
      exito = txtFiltro === '' || campoEvaluar.toLowerCase().indexOf(txtFiltro.toLowerCase()) > -1;
      if (exito) {
          this.MatrizAirport[count] = [];
          for (let j = 0; j < nCampos; j++) {
              this.MatrizAirport[count][j] = campos[j];
          }
          let obj = {
            valor1: campos[0],
            valor2: campos[1],
            valor3: campos[2],
            valor4: campos[3],
            valor5: campos[4],
            valor6: campos[5],
            valor7: campos[6],
            valor8: campoEvaluar
          };
  
          listado2.push(obj);
          count++;
      }
  }
}




this.MatrizAirport2 = listado2;

if (type === 1) {
  $("#divwebCompAirport").show();
}

if (type === 2) {
  $("#divwebCompAirportDestino").show();
}
//this.flagMatrizAirport2 = true;

}


ShowMatrizAirport(div) {

//console.log("this.MatrizAirport = [];");
//this.MatrizAirport = [];

let divprueba1 = $("#divprueba1").html();
let content = '';
let campoEvaluar = '';
const divIgualar = div.split('_')[0];
const divPosition = div.split('_')[1];
if (this.MatrizAirport !== null && this.MatrizAirport.length > 0) {
    const nRegisters = this.MatrizAirport.length;

    for (let i = 0; i < nRegisters; i++) {
        campoEvaluar = '[';
        campoEvaluar += this.MatrizAirport[i][3].toUpperCase().trim(); // CodeCity
        campoEvaluar += '] ';
        campoEvaluar += this.MatrizAirport[i][0].toUpperCase().trim(); // NameAirPort
        campoEvaluar += ' - ';
        campoEvaluar += this.MatrizAirport[i][1].toUpperCase().trim(); // NameCity
        campoEvaluar += ' - ';
        campoEvaluar += this.MatrizAirport[i][2].toUpperCase().trim(); // NameCountry
        /*
        content += "<li id='airline";
        content += this.MatrizAirport[i][3];
        if (divIgualar === "dvAirportOrigin") {
            content += "' (click)='selectAirport(this, 1, ";
            content += divPosition;
            content += ")' class='liSelector'>";
        } else if (divIgualar === "dvAirportDestination") {
            content += "' (click)='selectAirport(this, 2, ";
            content += divPosition;
            content += ")' class='liSelector'>";
        } else {
            content += "' (click)='selectAirport(this, 0, 0)' class='liSelector'>";
               }
        content += campoEvaluar;
        content += "</li>";
        */
    }
} else {
    content = 'No se encontraron ciudades o aeropuertos con ese nombre';
}
if (div !== null) {
   // document.getElementById(div).innerHTML = '<div><ul>' + content + '</ul></div>';
}
}



/*
showDivAirport(type, position) {
let txt = '';
let div = '';
if (type === 1) {
    txt = 'txtOrigin_' + position;
    div = 'dvAirportOrigin_' + position;
} else if (type === 2) {
    txt = 'txtDestination_' + position;    
    div = 'dvAirportDestination_' + position;
}
if ($(div).css({"display" : "none"})) {  //((document.getElementById(div) as HTMLInputElement).style.display === 'none') {
  $(div).css({"display" : "none"})
   // (document.getElementById(div) as HTMLInputElement).style.display = 'block';
}
let valortxt = this.searchObj.Origin;

if (valortxt !== '') {
    this.FilterMatrizAirport(txt, div, tipo);
}
}
*/


filterAirport(type, position, tipo) {
let txt = '';
let div = '';
if (type === 1) {
    txt = 'txtOrigin_' + position;
    div = 'dvAirportOrigin_' + position;
} else if (type === 2) {
    txt = 'txtDestination_' + position;
    div = 'dvAirportDestination_' + position;
}
this.FilterMatrizAirport(txt, div, tipo);
}


eventoHijoPadre(event) {
  this.ciudadObj.salida = event;
  $("#divwebCompAirport").hide();
}

eventoDestino(event) {
  this.ciudadObj.llegada = event;
  $("#divwebCompAirportDestino").hide();
}

mostrarDetalle() {
  this.detalle = true;
}


// tslint:disable-next-line: no-trailing-whitespace
  isChecked(tipo: number) {   
    if (tipo === 1) {
      this.tipo = 1;
      this.opciones = false;
    }
    if (tipo === 2) {
      this.tipo = 2;
      this.opciones = false;
    }
    if (tipo === 3) {
      this.tipo = 3;
      this.opciones = true;
    }
  }

  mostrarResultados() {
  this.filtros_active = false;
  this.resultados = true;
  }

  mostrarFiltros() {
    this.filtros_active = true; 
    this.resultados = true;
  }

  mostrarOpciones(tipo: number) {
    if (this.tipo === 1) {
      this.status = true;
      this.mostrar1 = false;
      this.ocultar1 = true;
    }
    if (this.tipo === 3) {
      this.opciones = true;
      this.mostrar = false;
      this.ocultar = true;
    }
  }

  ocultarOpciones(tipo: number) {
    if (this.tipo === 1) {
      this.status = false;
      this.mostrar1 = true; 
      this.ocultar1 = false;
    }
    if (this.tipo === 3) {
      this.opciones = false;
      this.mostrar = true;
      this.ocultar = false;
    }
  }


  }



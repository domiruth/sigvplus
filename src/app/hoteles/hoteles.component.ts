import { Component, OnInit } from '@angular/core';
import { HotelService } from '../services/hotel-service.service';
import { SearchHotel } from '../models/SearchHotel';
import { HotelResults } from '../models/HotelResults';
import { all } from 'q';

declare var jquery: any;
declare var $: any;



@Component({
  selector: 'app-hoteles',
  templateUrl: './hoteles.component.html',
  styleUrls: ['./hoteles.component.css']
})
export class HotelesComponent implements OnInit {

  stringAirport: string;
  busqueda: boolean = true;
  mostrar: boolean = false;
  estado: boolean = false;
  results: HotelResults[];
  listaPrecio: any[] = [];
  MatrizAirportGeneral: any[] = [];
  MatrizAirport: any[] = [];
  typeFlight: string = 'RT';
  modal: boolean = false;
  txtdemo1: string = "MIA";

  SearchObj: any = {  
    HotelCityCode: 'MIA',
	  category: '8',
	  Start: '',
	  End: '',
	  MaxRate: '300.00',
	  MinRate: '100.00',
	  cantidadh: '',
	  cantidadp: ''
  };

  prueba: string = '150';
  constructor(public service: HotelService) {
    console.log("constructor");
  }

  ngOnInit() {
    /*this.GetPriceMin();*/

    console.log("ngOnInit");

    this.FilterAirport();

    //console.log($("#txtdestino").val());

    setTimeout(function(){console.log($("#txtdestino").val());}, 5000);
  }

  MostrarModal() {
    this.modal = true;
  }
  
  ocultarResultados() {
    this.mostrar = false;
  }

  MostrarResultados() {
    this.mostrar = true;
  }

  MostrarDetalleHabitacion() {
   this.mostrar = false;
   this.busqueda = false;
   this.estado = true;
  }

SearchHotel() {
  this.service.SearchHotel(this.SearchObj).subscribe(data => {
    this.results = data;
    console.log(this.results);
  });

  this.mostrar = true;
}


  FilterAirport() {
    console.log("entro");
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

FilterMatrizAirport(txt, div) {
  this.CreateMatrizAirport(txt);
  this.ShowMatrizAirport(div);
}

 CreateMatrizAirport(txt) {
  console.log("CreateMatrizAirport");
  console.log("txt: " + txt);
  const nAirport = this.stringAirport.length;
  let count = 0;
  let campos;
  let nCampos;
  let exito;
  let campoEvaluar = '';
  let txtFiltro = '';
  if (txt !== null) {
    txtFiltro = this.SearchObj.HotelCityCode;
    console.log(txtFiltro);
    console.log(txtFiltro);
    console.log(txtFiltro);
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
          count++;
      }
  }
  console.log("CreateMatrizAirport FIN");
}

ShowMatrizAirport(div) {

  let divprueba1 = $("#divprueba1").html();
  console.log(divprueba1);

  console.log("ShowMatrizAirport");
  console.log("div: "+div);
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
          content += divprueba1;
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
      document.getElementById(div).innerHTML = '<div><ul>' + content + '</ul></div>';
  }
  console.log("ShowMatrizAirport FIN");
}

selectAirport(value, type, position) {
  console.log("value: " + value);
  console.log("type: " + type);
  console.log("position: " + position);
  if (type === 1) {
      //(document.getElementById("txtOrigin_" + position) as HTMLInputElement).value = document.getElementById(value.id).innerHTML;
      //(document.getElementById("dvAirportOrigin_" + position) as HTMLInputElement).style.display = 'none';
      this.SearchObj.HotelCityCode = "xxxxxxx";
  } else if (type === 2) {
      (document.getElementById("txtDestination_" + position) as HTMLInputElement).value = document.getElementById(value.id).innerHTML;
      (document.getElementById("dvAirportDestination_" + position) as HTMLInputElement).style.display = 'none';
  }
}

showDivAirport(type, position) {
  console.log("showDivAirport");
  let txt = '';
  let div = '';
  if (type === 1) {
      txt = 'txtOrigin_' + position;
      div = 'dvAirportOrigin_' + position;
  } else if (type === 2) {
      txt = 'txtDestination_' + position;    
      div = 'dvAirportDestination_' + position;
  }
  if ((document.getElementById(div) as HTMLInputElement).style.display === 'none') {
    console.log("showDivAirport paso 1");
      (document.getElementById(div) as HTMLInputElement).style.display = 'block';
  }
  console.log("showDivAirport paso 2");

  console.log("txt: " + txt);
  console.log("div: " + div);


  let valortxt = this.SearchObj.HotelCityCode;
  console.log("valortxt: " + valortxt);

  if (valortxt !== '') {
    console.log("showDivAirport paso 3");
      this.FilterMatrizAirport(txt, div);
  }
  console.log("showDivAirport paso FIN");
}

filterAirport(type, position) {
  console.log("type: " + type);
  console.log("position: " + position);
  let txt = '';
  let div = '';
  if (type === 1) {
      txt = 'txtOrigin_' + position;
      div = 'dvAirportOrigin_' + position;
  } else if (type === 2) {
      txt = 'txtDestination_' + position;
      div = 'dvAirportDestination_' + position;
  }
  this.FilterMatrizAirport(txt, div);
}


  /*
   GetPriceMin(listaprecio: any[]) {
      this.prueba = "50";
  } 
  */
}

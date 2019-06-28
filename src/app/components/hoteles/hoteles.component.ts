import { Component, OnInit } from '@angular/core';
import { SearchHotel } from '../../models/SearchHotel';
import { HotelResults } from '../../models/HotelResults';
import { all } from 'q';
import { HotelService } from 'src/app/services/hotel-service.service';
import { HotelDetails } from '../../models/HotelDetails';
import { ThrowStmt } from '@angular/compiler';

declare var jquery: any;
declare var $: any;



@Component({
  selector: 'app-hoteles',
  templateUrl: './hoteles.component.html',
  styleUrls: ['./hoteles.component.css']
})
export class HotelesComponent implements OnInit {

  codeCity: string;
  stringAirport: string;
  busqueda: boolean = true;
  mostrar: boolean = false;
  estado: boolean = false;
  results: HotelResults[];
  listaPrecio: any[] = [];
  MatrizAirportGeneral: any[] = [];
  MatrizAirport: any[] = [];
  MatrizAirport2: any[] = [];
  typeFlight: string = 'RT';
  modal: boolean = false;
  txtdemo1: string = "MIA";
  HotelCityCode: string;
  details: HotelDetails[];
  inputof: boolean = false;

  flagMatrizAirport2: boolean = false;

  SearchObj: any = { 
    HotelCityCode: '',
	  Start: '',
	  End: '',
	  MaxRate: '300.00',
	  MinRate: '100.00',
	  cantidadh: '',
    cantidadp: '',
    SegmentCategoryCode: ''
  };

  CodeObj: any = {
    namecity: ''
  }   

  estrella = [
     { codigo: 13, descripcion: "1 Estrella - 2 Estrellas" },
     { codigo: 16, descripcion: "3 Estrellas" },
     { codigo: 7, descripcion: "4 Estrellas" },
     { codigo: 8, descripcion: "5 Estrellas" }
  ];  

  prueba: string = '150';

  minDate: Date;
  minDate2: Date;
  dateCheckIn: any;
  dateCheckOut: any;
  isOpen = false;

  constructor(public service: HotelService) {
    //this.minDate = new Date();
    //this.minDate.setDate(this.minDate.getDate() - 1);
  }

  ngOnInit() {
    /*this.GetPriceMin();*/
    console.log("ngOnInit");
    this.FilterAirport();

    //console.log($("#txtdestino").val());

    //setTimeout(function(){console.log($("#txtdestino").val());}, 5000);
  }


  fechaMinima(datepicker2) {
    console.log(this.dateCheckIn);
    //alert(this.dateCheckIn);

    this.minDate = this.dateCheckIn;
    //this.minDate.setDate(this.minDate.getDate() - 1);

    //const txtDateCheckIn = $("#txtDateCheckIn").val();
    //console.log(txtDateCheckIn);

    console.log(datepicker2);
    //datepicker2.toggle();

    this.isOpen = true;
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
   this.SearchHotel();
  }

SearchHotel() {
  this.SacarRegex();
  this.service.SearchHotel(this.SearchObj).subscribe(
    data => {
      this.results = data;
      console.log(this.results);
    },
    error => console.log('HTTP Error', error),
    () => {
      console.log('HTTP request completed.');
      this.mostrar = true;
    }
  );

  //this.mostrar = true;
}

HotelDetails() {
  this.service.Hotel(this.SearchObj).subscribe(
    data => {
      this.details = data;
      console.log(this.details);
    },
    error => console.log('HTTP Error', error),
    () => {
      console.log('HTTP request completed.');
      this.mostrar = true;
    }
  );
}

  FilterAirport() {
    this.service.FilterAirport().subscribe(data => {
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
  this.MatrizAirport = [];

  let listado2: any[] = [];
  this.flagMatrizAirport2 = false;

  const nAirport = this.stringAirport.length;
  let count = 0;
  let campos;
  let nCampos;
  let exito;
  let campoEvaluar = '';
  let txtFiltro = '';
  if (txt !== null) {
    txtFiltro = this.CodeObj.namecity;
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

  this.MatrizAirport2 = listado2;

  this.flagMatrizAirport2 = true;
  $("#divwebCompAirport").show();
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
  let valortxt = this.SearchObj.HotelCityCode;

  if (valortxt !== '') {
      this.FilterMatrizAirport(txt, div);
  }
}


filterAirport(type, position) {
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


eventoHijoPadre(event) {
  this.CodeObj.namecity = event;
  this.flagMatrizAirport2 = false;
  $("#divwebCompAirport").hide();
  let destino = this.CodeObj.namecity;
  this.SearchObj.HotelCityCode = this.SacarRegex(); 
}


SacarRegex() {
  let str = this.CodeObj.namecity;
  let patt = new RegExp(/\[\w{3}\]/);
  let res = patt.exec(str);
  let patt1 = new RegExp(/\w{3}/);
  let res1 = patt1.exec(res[0]);
  console.log(res1[0]);
  return res1[0];
 }


  /*
   GetPriceMin(listaprecio: any[]) {
      this.prueba = "50";
  } 
  */
}

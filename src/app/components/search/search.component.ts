import { Component, OnInit } from '@angular/core';
import { VueloService } from '../../services/vuelo.service';


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

  searchObj: any = {
    TypeFlight: 'OW',
    Origin: ['[LIM]'],
    Destination: ['[CUZ]'],
    DepartureArrivalDate: ['2019/09/20'],
    DepartureArrivalTimeFrom: [''],
    DepartureArrivalTimeTo: [''],
    NumberPassengers: '1',
    CabinType: '',
    Company: 'ServicesFabric.SigvPlus',
    Pseudo: 'LIMPE2235',
    Currency: 'PEN'
  };

  constructor(public service: VueloService) { }


  ngOnInit() {
  }

  SearchFlight() {
    this.service.SearchFlight(this.searchObj).subscribe(data => {
        console.log(data);
    });
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



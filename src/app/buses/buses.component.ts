import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buses',
  templateUrl: './buses.component.html',
  styleUrls: ['./buses.component.css']
})
export class BusesComponent implements OnInit {

  tipo = 1;
  mostrar:boolean = true;

  constructor() { }

  ngOnInit() {
  }

  isChecked(tipo: number)
  {
   if (tipo === 1) {
     this.tipo = 1;
   }
   if(tipo === 2) {
     this.tipo = 2;
   }
  }

}

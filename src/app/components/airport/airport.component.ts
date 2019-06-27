import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-airport',
  templateUrl: './airport.component.html',
  styleUrls: ['./airport.component.css']
})
export class AirportComponent implements OnInit {

  @Input() listado: any[];
  @Output() texto1: EventEmitter<string>;
   
  constructor() { 
    this.texto1 = new EventEmitter();
  }

  ngOnInit() {
    console.log("AirportComponent");
  }



  selectAirport(value, type, position, valor8) {


    if (type === 1) {
        //(document.getElementById("txtOrigin_" + position) as HTMLInputElement).value = document.getElementById(value.id).innerHTML;
        //(document.getElementById("dvAirportOrigin_" + position) as HTMLInputElement).style.display = 'none';
        this.texto1.emit(valor8);
        
    } else if (type === 2) {
        (document.getElementById("txtDestination_" + position) as HTMLInputElement).value = document.getElementById(value.id).innerHTML;
        (document.getElementById("dvAirportDestination_" + position) as HTMLInputElement).style.display = 'none';
    }
  }
}

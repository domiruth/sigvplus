import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-airport-destino',
  templateUrl: './airport-destino.component.html',
  styleUrls: ['./airport-destino.component.css']
})
export class AirportDestinoComponent implements OnInit {

  @Input() listado2: any[];
  @Output() city: EventEmitter<string>;

  constructor() {
    this.city = new EventEmitter();
   }

  ngOnInit() {
  }

  selectAirport(value, type, position, valor8) {


    if (type === 1) {
        //(document.getElementById("txtOrigin_" + position) as HTMLInputElement).value = document.getElementById(value.id).innerHTML;
        //(document.getElementById("dvAirportOrigin_" + position) as HTMLInputElement).style.display = 'none';
        this.city.emit(valor8);
        
    } else if (type === 2) {
        (document.getElementById("txtDestination_" + position) as HTMLInputElement).value = document.getElementById(value.id).innerHTML;
        (document.getElementById("dvAirportDestination_" + position) as HTMLInputElement).style.display = 'none';
    }
  }
}

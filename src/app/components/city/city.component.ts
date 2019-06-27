import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  @Input() Listado: any[] = [];
  @Output() nameCity: EventEmitter<string>;
  @Output() codecity: EventEmitter<string>;

  constructor() {
    this.nameCity = new EventEmitter();
    this.codecity = new EventEmitter();
   }

  ngOnInit() {
  }


  selectCity(codigo,ciudad) {


 
        //(document.getElementById("txtOrigin_" + position) as HTMLInputElement).value = document.getElementById(value.id).innerHTML;
        //(document.getElementById("dvAirportOrigin_" + position) as HTMLInputElement).style.display = 'none';
        this.codecity.emit(codigo);
        this.nameCity.emit(ciudad);
        
     /*else if (type === 2) {
        (document.getElementById("txtDestination_" + position) as HTMLInputElement).value = document.getElementById(value.id).innerHTML;
        (document.getElementById("dvAirportDestination_" + position) as HTMLInputElement).style.display = 'none';
    }
    */
  }
}

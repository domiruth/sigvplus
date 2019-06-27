import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-citydestino',
  templateUrl: './citydestino.component.html',
  styleUrls: ['./citydestino.component.css']
})
export class CitydestinoComponent implements OnInit {

  @Input() Listado2: any[] = [];
  @Output() nameCityDes: EventEmitter<string>;
  @Output() codecityDes: EventEmitter<string>;

  constructor() { 
    this.nameCityDes = new EventEmitter();
    this.codecityDes = new EventEmitter();
  }

  ngOnInit() {

  }

  selectCity(codigo,ciudad) {


 
    //(document.getElementById("txtOrigin_" + position) as HTMLInputElement).value = document.getElementById(value.id).innerHTML;
    //(document.getElementById("dvAirportOrigin_" + position) as HTMLInputElement).style.display = 'none';
    this.codecityDes.emit(codigo);
    this.nameCityDes.emit(ciudad);
    
 /*else if (type === 2) {
    (document.getElementById("txtDestination_" + position) as HTMLInputElement).value = document.getElementById(value.id).innerHTML;
    (document.getElementById("dvAirportDestination_" + position) as HTMLInputElement).style.display = 'none';
}
*/
}



}

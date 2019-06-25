import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-airport',
  templateUrl: './airport.component.html',
  styleUrls: ['./airport.component.css']
})
export class AirportComponent implements OnInit {

  @Input() listado: any[];

  constructor() { }

  ngOnInit() {
  }

  probando() {
    console.log("probando");
  }

}

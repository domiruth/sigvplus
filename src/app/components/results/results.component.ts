import { Component, OnInit, Input, Output } from '@angular/core';
import { VuelosResults } from '../../models/VuelosResults';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  @Input() listado: VuelosResults[];
  @Input() tipovuelo: any;

  constructor() { }

  ngOnInit() {
  }

}

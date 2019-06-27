import { Component, OnInit, Input } from '@angular/core';
import { HotelResults } from '../../models/HotelResults';

@Component({
  selector: 'app-hotelhijo',
  templateUrl: './hotelhijo.component.html',
  styleUrls: ['./hotelhijo.component.css']
})
export class HotelhijoComponent implements OnInit {

  @Input() listado: HotelResults[];

  constructor() { }

  ngOnInit() {
  }

}

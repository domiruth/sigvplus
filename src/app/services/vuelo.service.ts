import { Injectable } from '@angular/core';
import { SearchFlight } from '../models/SearchFlight';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of  } from 'rxjs';
import { VuelosResults } from '../models/VuelosResults';



@Injectable({
  providedIn: 'root'
})

export class VueloService {


  url: string = 'http://172.16.3.15:7010/api/SearchFlight/SearchFlight';
  urlCiudades: string = 'http://172.16.3.15:8050/api/Airport/AirportList';

  constructor(private http: HttpClient) { }


/*
  getCliente() {
    return this.http.get<Cliente[]>(this.url);
  }
*/
  SearchFlight(search: SearchFlight): Observable<VuelosResults[]> {
   return this.http.post<VuelosResults[]>(`${this.url}`, search, {
    headers: {
      'Content-Type': 'application/json'
  }
   });
  }

  FilterAirport() {
    return this.http.get(this.urlCiudades);
  }
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchBuses } from '../models/SearchBuses';
import { Observable } from 'rxjs';
import { Ciudad } from '../models/ciudad';
import { environment } from '../../environments/environment';
import { BusesResults } from '../models/BusesResults';


@Injectable({
  providedIn: 'root'
})
export class BusesService {

  url: string = 'http://172.16.3.19:8080/api/ListaViajes/ListaViajes';
  //url: string = environment.urlAmadeus + '/ListaViajes/'; //GetViajesOltursa

  url_ciudad: string = 'http://172.16.3.19:8080/api/Viaje/ListaCiudades';
  //url_ciudad: string = environment.urlAmadeus + '/Viaje/';

  constructor(private http: HttpClient) { }

  
  SearchBus(search: SearchBuses): Observable<BusesResults[]> {
    return this.http.post<BusesResults[]>(`${this.url}`, search, {
      headers: {
        'Content-Type': 'application/json'
    }
    });
}


GetCiudades(): Observable<Ciudad[]> {
  return this.http
  .post<Ciudad[]>(`${this.url_ciudad}`, {
    headers: {
      'Content-Type': 'application/json'
  }
  })
  ;
}
}
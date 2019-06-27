import { Injectable } from '@angular/core';
import { SearchFlight } from '../models/SearchFlight';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { SearchHotel } from '../models/SearchHotel';
import { observable, Observable } from 'rxjs';
import { HotelResults } from '../models/HotelResults';
import { Hotel } from '../models/hotel';
import { HotelDetails } from '../models/HotelDetails';



@Injectable({
  providedIn: 'root'
})
export class HotelService {

  url: string = 'http://172.16.3.20:8080/api/SearchHotel/SearchHotel';
  urlCiudades: string = 'http://172.16.3.15:8050/api/Airport/AirportList';
  urlHotel: string = 'http://172.16.3.20:8080/api/SearchHotel/SearchHotelTwo';

  constructor(private http: HttpClient) { }

/* 
  getCliente() {
    return this.http.get<Cliente[]>(this.url);
  }
*/

/*
  SearchHotel(search: SearchHotel) {
   return this.http.post(this.url, search);
  }
*/

SearchHotel(search: SearchHotel): Observable<HotelResults[]> {
    return this.http.post<HotelResults[]>(`${this.url}`, search, {
      headers: {
        'Content-Type': 'application/json'
    }
    });
}
  FilterAirport() {
    return this.http.get(this.urlCiudades);
  }

  Hotel(hotel: Hotel): Observable<HotelDetails[]> {
    return this.http.post<HotelDetails[]>(`${this.url}`, hotel, {
      headers: {
        'Content-Type': 'application/json'
    }
    });
  }
}
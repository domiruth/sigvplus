import { Injectable } from '@angular/core';
import { SearchFlight } from '../models/SearchFlight';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of  } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class VueloService {


  url: string = 'http://172.16.3.15:8084/SearchFlight';

  constructor(private http: HttpClient) { }


/*
  getCliente() {
    return this.http.get<Cliente[]>(this.url);
  }
*/
  SearchFlight(search: SearchFlight) {
   return this.http.post(this.url, search);
  }
  
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../models/login';
import { LoginResults } from '../models/LoginResults';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url: string = 'http://172.16.3.15:7000/api/Authenticate/LoginUser';

  constructor(private http: HttpClient) { }

  LoginServices(login: Login): Observable<LoginResults[]> {
    return this.http.post<LoginResults[]>(`${this.url}`, login, {
      headers: {
        'Content-Type': 'application/json'
    }
    });
  }
}

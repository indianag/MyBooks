import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
      private url: string = 'http://localhost:3000';
      public logueado: boolean = false;
      public user: User | undefined;

  constructor(private http: HttpClient) {}

  register(user: User): Observable<any> {
    return this.http.post(`${this.url}/register`, user);
  }

  loginpost(user:User): Observable<any> {
    return this.http.post(`${this.url}/login`, user);
  }

}



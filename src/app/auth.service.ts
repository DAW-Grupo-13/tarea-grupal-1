import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioInterface } from './interfaces/UsuarioInterface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl: string = 'https://localhost:7275/api/Usuario/GetValidarAcceso';
  constructor(private http: HttpClient) { }

  login(user: UsuarioInterface){
    return this.http.post(this.baseUrl, user);
  }

  get getUsername(){
    return localStorage.getItem('userName');
  }

  get isAutenticado(){
    return !!localStorage.getItem('token_value');
  }
}

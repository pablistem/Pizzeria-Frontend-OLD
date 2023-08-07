import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private tokenKey = 'accessToken';
  private url = `${environment.API_URL}/auth`

  constructor(
    private http: HttpClient
  ) { }

  guardarToken(token: string) {
    localStorage.setItem(this.tokenKey, token);
  }

  obtenerToken() {
    return localStorage.getItem(this.tokenKey);
  }

  limpiarToken() {
    localStorage.removeItem(this.tokenKey);
  }

  estaLogueado() {
    return !!localStorage.getItem(this.tokenKey);
  }

  login(credenciales: any) {
    return this.http.post<any>(this.url + '/login', credenciales)
  }

  register(credenciales: any) {
    return this.http.post<any>(this.url + '/signup', credenciales)
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';
import { LoginRequest, RegisterRequest, User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private tokenKey = 'accessToken';
  private url = environment.API_URL

  constructor(
    private http: HttpClient,
    private cookieService: CookieService
  ) { }

  register(request: RegisterRequest) {
    return this.http.post<User>(`${this.url}/auth/signup`, request);
  }

  login(request: LoginRequest) {
    return this.http.post<User>(`${this.url}/auth/login`, request);
  }

  guardarToken(token: string): void {
    this.cookieService.set(this.tokenKey, token);
  }

  obtenerToken(): string | null {
    return this.cookieService.get(this.tokenKey);
  }

  limpiarToken(): void {
    this.cookieService.delete(this.tokenKey);
  }

  estaLogueado(): boolean {
    return this.cookieService.check(this.tokenKey);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginRequest, RegisterRequest, User } from '../model/user';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  backendUrl: string = "http://localhost:8080"

  constructor(
    private http: HttpClient,
    private cookieService: CookieService
  ) { }

  register(request: RegisterRequest) {
    return this.http.post<User>(`${this.backendUrl}/auth/signup`, request);
  }

  login(request: LoginRequest) {
    return this.http.post<User>(`${this.backendUrl}/auth/login`, request);
  }

  userIsLoggedIn(): boolean {
    return this.cookieService.check('token');
  }

}

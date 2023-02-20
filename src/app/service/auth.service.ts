import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RegisterRequest, User } from '../model/user';

// Decorado con @Injectable para permitir que se inyecte como una dependencia
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // La URL base para la API de back-end
  backendUrl: string = "http://localhost:8080"

  // El módulo HttpClient se inyecta en el constructor para habilitar las solicitudes HTTP
  constructor(private http: HttpClient) { }

  /**
   * Envía una solicitud POST al servidor para registrar un nuevo usuario.
   * @param request Objeto de tipo RegisterRequest
   * @returns Observable de tipo Usuario
   */
  register(request: RegisterRequest) {
    return this.http.post<User>(`${this.backendUrl}/auth/signup`, request);
  }

}

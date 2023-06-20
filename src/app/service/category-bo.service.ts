import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class CategoryBOService {

  private backendUrl: string = "http://localhost:8080"

  constructor(
    private http: HttpClient,
    private cookieService: CookieService
  ) { }

  getAll(){
    return this.http.get<any>(`${this.backendUrl}/product`);
  }

}

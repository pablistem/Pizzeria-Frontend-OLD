import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private url = environment.API_URL

  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    return this.http.get<any>(`${this.url}/category`);
  }

  create(request: any) {
    return this.http.post<any>(`${this.url}/category`, request);
  }

  update(request: any, id: number) {
    return this.http.put<any>(`${this.url}/category/${id}`, request);
  }

}

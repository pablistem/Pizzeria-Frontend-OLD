import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ProductRequest } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url = environment.API_URL

  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    return this.http.get<any>(`${this.url}/product`);
  }

  create(request: ProductRequest) {
    return this.http.post<any>(`${this.url}/product`, request);
  }

  delete(id: number) {
    return this.http.delete<void>(`${this.url}/product/${id}`);
  }

  update(request: any, id: number) {
    return this.http.put<any>(`${this.url}/product/${id}`, request);
  }

}

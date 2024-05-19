import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  http = inject(HttpClient)
  constructor() { }

  getProductById(id: string | number){
    return this.http.get(`https://fakestoreapi.com/prod2323ucts/${id}`)
  }
}

import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

const url = 'http://localhost:3000/products';

@Injectable({
  providedIn: `root`,
})
export class ProductsService {
  private readonly client: HttpClient = inject(HttpClient);

  getAll(): Observable<Product[]> {
    return this.client.get<Product[]>(url);
  }
}

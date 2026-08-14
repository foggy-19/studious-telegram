import { Service } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from './model/product';

@Service()
export class ProductService {
  private data: Product[] = [
    { id: 1, name: 'Guitar', price: 1000 },
    { id: 2, name: 'Piano', price: 7000 },
    { id: 3, name: 'Drums', price: 3000 },
  ];

  constructor() {}

  getAll(): Observable<Product[]> {
    return of(this.data);
  }

  get(id: number): Observable<Product | undefined> {
    return of(this.data.find((product) => product.id === id));
  }
}

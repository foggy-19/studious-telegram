import { Component } from '@angular/core';
import { ProductService } from '../product-service';
import { Router } from '@angular/router';
import { Product } from '../model/product';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  products: Product[] = [];

  constructor(
    private router: Router,
    store: ProductService,
  ) {
    store.getAll().subscribe((products) => {
      console.log('loaded');
      this.products = products;
    });
  }

  goToProductDetails(id: number) {
    console.log(`goto: ${id}`);
    this.router.navigate(['products', id]);
  }
}

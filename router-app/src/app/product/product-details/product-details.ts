import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product-service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Product } from '../model/product';
import { CurrencyPipe, Location } from '@angular/common';

@Component({
  selector: 'app-product-details',
  imports: [CurrencyPipe],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails implements OnInit {
  product?: Product;

  constructor(
    private location: Location,
    private store: ProductService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');
      if (!id) {
        return;
      }

      this.store.get(Number(id)).subscribe((product) => (this.product = product));
    });
  }

  goBack() {
    this.location.back();
  }
}

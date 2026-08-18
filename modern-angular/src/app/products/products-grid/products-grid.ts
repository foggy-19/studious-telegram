import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { ProductCard } from '../product-card/product-card';
import { Product } from '../product';
import { MatIconModule } from '@angular/material/icon';
import { MatFormField, MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { CartService } from '../../cart/cart-service';
import { ProductsService } from '../products-service';

@Component({
  selector: 'app-products-grid',
  imports: [ProductCard, MatIconModule, MatInputModule, MatFormField, FormsModule, MatButtonModule],
  templateUrl: './products-grid.html',
  styleUrl: './products-grid.css',
})
export class ProductsGrid implements OnInit {
  private readonly productsService: ProductsService = inject(ProductsService);
  private readonly cartService: CartService = inject(CartService);

  protected readonly searchTerm = signal('');

  protected readonly products = signal<Product[]>([]);

  protected readonly filteredProducts = computed(() => {
    const term = this.searchTerm().trim().toLowerCase();
    if (!term) {
      return this.products();
    }

    return this.products().filter((product) => {
      const nameMatch = product.name.toLowerCase().includes(term);
      const descriptionMatch = product.description.toLowerCase().includes(term);

      return nameMatch || descriptionMatch;
    });
  });

  ngOnInit(): void {
    this.productsService.getAll().subscribe((items) => this.products.set(items));
  }

  protected onAddToCart(product: Product): void {
    this.cartService.addToCart(product);
  }

  protected clearSearch() {
    this.searchTerm.set('');
  }
}

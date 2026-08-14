import { Routes } from '@angular/router';
import { Zero } from './zero/zero';
import { First } from './first/first';
import { Second } from './second/second';
import { Lost } from './lost/lost';
import { ProductList } from './product/product-list/product-list';
import { ProductDetails } from './product/product-details/product-details';

export const routes: Routes = [
  { path: '', component: Zero },
  { path: 'first', component: First },
  { path: 'second', component: Second },
  { path: 'products', component: ProductList },
  { path: 'products/:id', component: ProductDetails },
  { path: '**', component: Lost },
];

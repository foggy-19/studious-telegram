import { Routes } from '@angular/router';
import { Zero } from './zero/zero';
import { First } from './first/first';
import { Second } from './second/second';
import { Lost } from './lost/lost';

export const routes: Routes = [
  { path: '', component: Zero },
  { path: 'first', component: First },
  { path: 'second', component: Second },
  { path: '**', component: Lost },
];

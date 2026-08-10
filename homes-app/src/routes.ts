import { Routes } from '@angular/router';
import { HomeComponent } from './app/home/home.component';
import { DetailsComponent } from './app/details/details.component';

export const routes: Routes = [
  { path: '', title: 'Home', component: HomeComponent },
  { path: 'details/:id', title: 'Details', component: DetailsComponent },
];

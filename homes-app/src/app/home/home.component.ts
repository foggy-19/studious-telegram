import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housing-location';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" #filter />
        <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
      </form>
    </section>
    <section class="results">
      <app-housing-location *ngFor="let house of filteredResults" [housingLocation]="house"> </app-housing-location>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  filteredResults: HousingLocation[] = [];
  housingLocations: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);

  constructor() {
    this.housingService.getAllHousingLocations().then((locations: HousingLocation[]) => {
      this.housingLocations = locations;
      this.filteredResults = locations;
    });
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredResults = this.housingLocations;
      return;
    }

    this.filteredResults = this.housingLocations.filter((house: HousingLocation) => house?.city.toLowerCase().includes(text.toLowerCase()));
  }
}

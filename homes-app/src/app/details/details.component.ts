import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { HousingService } from "../housing.service";
import { HousingLocation } from "../housing-location";

@Component({
  selector: "app-details",
  standalone: true,
  imports: [CommonModule],
  template: `
    <article>
      <img
        class="listing-photo"
        [src]="housingLocation?.photo"
        alt="Exterior photo of {{ housingLocation?.name }}"
      />
      <section class="listing-description">
        <h2 class="listing-heading">{{ housingLocation?.name }}</h2>
        <p class="listing-location">
          {{ housingLocation?.city }}, {{ housingLocation?.state }}
        </p>
      </section>
      <section class="listing-features">
        <h3 class="section-heading">About this housing location</h3>
        <ul>
          <li>Units Available: {{ housingLocation?.availableUnits ?? 0 }}</li>
          <li>
            Does this location have Wifi:
            {{ housingLocation?.wifi ? "Yes" : "No" }}
          </li>
          <li>
            Does this location have laundry:
            {{ housingLocation?.laundry ? "Yes" : "No" }}
          </li>
        </ul>
      </section>
      <section class="listing-apply">
        <h3 class="section-heading">Apply now to live here!</h3>
        <button class="primary" type="button">Apply Now</button>
      </section>
    </article>
  `,
  styleUrls: ["./details.component.css"],
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService: HousingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;

  constructor() {
    const housingLocationId =
      Number(this.route.snapshot.paramMap.get("id")) ?? 0;

    this.housingLocation =
      this.housingService.getHousingLocationById(housingLocationId);
  }
}

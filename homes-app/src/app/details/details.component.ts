import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { HousingService } from "../housing.service";
import { HousingLocation } from "../housing-location";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: "app-details",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
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
        <form [formGroup]="applyForm" (submit)="onSubmit()">
          <input
            id="first-name"
            type="text"
            placeholder="First Name"
            formControlName="firstName"
          />
          <input
            id="last-name"
            type="text"
            placeholder="Last Name"
            formControlName="lastName"
          />
          <input
            id="email"
            type="email"
            placeholder="Email"
            formControlName="email"
          />
          <button class="primary" type="submit">Apply Now</button>
        </form>
      </section>
    </article>
  `,
  styleUrls: ["./details.component.css"],
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService: HousingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;
  applyForm = new FormGroup({
    firstName: new FormControl(""),
    lastName: new FormControl(""),
    email: new FormControl(""),
  });

  constructor() {
    const housingLocationId =
      Number(this.route.snapshot.paramMap.get("id")) ?? 0;

    this.housingLocation =
      this.housingService.getHousingLocationById(housingLocationId);
  }

  onSubmit() {
    const firstName = this.applyForm.value.firstName ?? "";
    const lastName = this.applyForm.value.lastName ?? "";
    const email = this.applyForm.value.email ?? "";

    this.housingService.submitApplication(firstName, lastName, email);
  }
}

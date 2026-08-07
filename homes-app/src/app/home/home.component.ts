import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HousingLocationComponent } from "../housing-location/housing-location.component";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section class="home-search">
      <form>
        <input type="text" id="search" placeholder="Filter by city" />
        <button class="primary" type="button">Search</button>
      </form>
      <section class="home-results"></section>
      <app-housing-location> </app-housing-location>
    </section>
  `,
  styleUrls: ["./home.component.css"],
})
export class HomeComponent {}

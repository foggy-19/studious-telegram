import { Injectable } from "@angular/core";
import { HousingLocation } from "./housing-location";

@Injectable({
  providedIn: "root",
})
export class HousingService {
  private url = "http://localhost:3000/locations";

  constructor() {}

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.url);

    return data.json() ?? [];
  }

  async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
    const locations = await fetch(`${this.url}/${id}`);

    return locations.json() ?? undefined;
  }

  submitApplication(firstName: string, lastName: string, email: string): void {
    console.log("Application submitted:", { firstName, lastName, email });
  }
}

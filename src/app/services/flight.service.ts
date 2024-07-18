import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environment/environment";
import { FlightInfoPayload } from "../model/flight-info-payload";

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  constructor(private http: HttpClient) {}

  flightInfoPayload: FlightInfoPayload = {
    airline: "",
    arrivalDate: "",
    arrivalTime: "",
    flightNumber: "",
    numOfGuests: 0,
  };

  sendForm() {
    return this.http.post(
      environment.submitFlightUrl,
      this.flightInfoPayload,
      {
        headers: {
          token: environment.token,
          candidate: 'Dat Le'
        },
      }
    );
  }
}
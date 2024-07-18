import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { FlightService } from '../services/flight.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flight-form-page',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    NgIf,
    ToastrModule,
    MatDatepickerModule,
  ],
  templateUrl: './flight-form-page.component.html',
  styleUrl: './flight-form-page.component.css',
})
export class FlightFormPageComponent {
  constructor(protected flightService: FlightService, private toastr: ToastrService) {}

  isReadyToSubmit(): boolean {
    return (Boolean) (this.flightService.flightInfoPayload.airline &&
      this.flightService.flightInfoPayload.arrivalDate &&
      this.flightService.flightInfoPayload.arrivalTime &&
      this.flightService.flightInfoPayload.flightNumber &&
      this.flightService.flightInfoPayload.numOfGuests > 0
    );
  }

  onSubmit() {    
    this.flightService.sendForm().subscribe({
      next: (value) => {
        this.toastr.success('Your flight has been successfully submitted', 'Success');
        this.flightService.flightInfoPayload = {
          airline: '',
          arrivalDate: '',
          arrivalTime: '',
          flightNumber: '',
          numOfGuests: 0,
        };
      },
      error: (error) => {
        this.toastr.error('Failed to submit your flight', 'Failure')
        console.error(error);
      }
    })
  }
}

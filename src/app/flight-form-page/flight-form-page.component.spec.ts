import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightFormPageComponent } from './flight-form-page.component';

describe('FlightFormPageComponent', () => {
  let component: FlightFormPageComponent;
  let fixture: ComponentFixture<FlightFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlightFormPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlightFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

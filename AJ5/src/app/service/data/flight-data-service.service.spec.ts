import { TestBed } from '@angular/core/testing';

import { FlightDataServiceService } from './flight-data-service.service';

describe('FlightDataServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FlightDataServiceService = TestBed.get(FlightDataServiceService);
    expect(service).toBeTruthy();
  });
});

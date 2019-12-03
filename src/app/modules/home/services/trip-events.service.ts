import { Injectable } from '@angular/core';
import { TripEventsDataService } from './trip-events-data.service';

@Injectable()
export class TripEventsService {
  constructor(private service: TripEventsDataService) {

  }
}

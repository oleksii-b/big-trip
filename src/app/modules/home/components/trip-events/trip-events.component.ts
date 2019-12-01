import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-trip-events',
  templateUrl: './trip-events.component.html',
  styleUrls: ['./trip-events.component.scss']
})
export class TripEventsComponent {
  @Input() events = [];
}

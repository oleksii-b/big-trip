import { Component } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

import points from '../../../../data/points.json';

@Component({
  selector: 'app-trip-days',
  templateUrl: './trip-days.component.html',
  styleUrls: ['./trip-days.component.scss']
})
export class TripDaysComponent {
  events: any;
  days: any[] = [];

  constructor() {
    of(points)
      .pipe(
        map((points) => points.map((point) => {
          const {id, type, destination: {name, pictures}, offers} = point;

          return {
            id,
            type,
            title: name,
            pictures,
            offers,
            start: point.date_from,
            end: point.date_to,
            price: point.base_price,
            isFavorite: point.is_favorite,
          }
        })),
      )
      .subscribe((points): void => {
        const tripDays: {[key: number]: any} = {};
        const dates: number[] = [];

        points.forEach((point): void => {
          const {start} = point;
          const dateFrom = new Date(start).setHours(0, 0, 0, 0);

          if (tripDays[dateFrom]) {
            tripDays[dateFrom].push(point);
          } else {
            tripDays[dateFrom] = [point];

            dates.push(dateFrom);
          }
        });

        this.events = {...tripDays};
        this.setDays(dates);
      });
  }

  setDays(dates): void {
    const days = dates.sort().map((date: number) => {
      const dateTime = new Date(date);

      return {
        dateTime: date,
        date: dateTime.getDate(),
        month: dateTime.toString().split(' ')[1],
        year: dateTime.getFullYear(),
      };
    });

    this.days = days.filter((day, i: number): boolean => {
      const {date, month, year} = day;

      if (i) {
        return !(
          date === days[i - 1].date &&
          month === days[i - 1].month &&
          year === days[i - 1].year
        );
      }

      return true;
    });
  }
}

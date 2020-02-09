import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Point } from '../components/types/point';

@Injectable({
  providedIn: 'root'
})
export class TripEventsService {
  private apiUrl = 'api/points';

  constructor(private http: HttpClient) { }

  getAllPoints(): Observable<Point[]> {
    return this.http.get<Point[]>(this.apiUrl);
  }
}

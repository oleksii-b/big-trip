import {Observable} from 'rxjs';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import points from '../../../data/points.json';

export class TripEventsDataService implements InMemoryDbService {
  createDb(): {} | Observable<{}> {
    return { points };
  }
}

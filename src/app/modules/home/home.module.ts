import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home/home-page.component';
import { SortingComponent } from './components/sorting/sorting.component';
import { NewEventComponent } from './components/new-event/new-event.component';
import { TripDaysComponent } from './components/trip-days/trip-days.component';
import { TripEventsComponent } from './components/trip-events/trip-events.component';
import { TripEventsDataService } from './services/trip-events-data.service';
import { EventFormComponent } from './components/event-form/event-form.component';

@NgModule({
  declarations: [
    HomePageComponent,
    SortingComponent,
    NewEventComponent,
    TripDaysComponent,
    TripEventsComponent,
    EventFormComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ButtonModule,
    DialogModule,
    InMemoryWebApiModule.forRoot(TripEventsDataService)
  ]
})
export class HomeModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomePageComponent } from './pages/home/home-page.component';
import { StatsPageComponent } from './pages/stats/stats-page.component';
import { SortingComponent } from './components/sorting/sorting.component';
import { NewEventComponent } from './components/new-event/new-event.component';
import { TripDaysComponent } from './components/trip-days/trip-days.component';
import { TripEventsComponent } from './components/trip-events/trip-events.component';
import { TripEventsDataService } from './services/trip-events-data.service';
import { TripEventsService } from './services/trip-events.service';
import { LayoutComponent } from './components/layout/layout.component';

@NgModule({
  declarations: [
    HomePageComponent,
    StatsPageComponent,
    SortingComponent,
    NewEventComponent,
    TripDaysComponent,
    TripEventsComponent,
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ButtonModule,
    DialogModule,
    SharedModule,
    InMemoryWebApiModule.forRoot(TripEventsDataService)
  ],
  providers: [
    TripEventsService
  ]
})
export class HomeModule { }

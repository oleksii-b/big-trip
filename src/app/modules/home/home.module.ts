import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home/home-page.component';
import { SortingComponent } from './components/sorting/sorting.component';
import { TripDaysComponent } from './components/trip-days/trip-days.component';
import { TripEventsComponent } from './components/trip-events/trip-events.component';

@NgModule({
  declarations: [
    HomePageComponent,
    SortingComponent,
    TripDaysComponent,
    TripEventsComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ButtonModule,
    DialogModule,
  ]
})
export class HomeModule { }

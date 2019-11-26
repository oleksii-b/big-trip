import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home/home-page.component';
import { SortingComponent } from './components/sorting/sorting.component';
import { TripDaysComponent } from './components/trip-days/trip-days.component';

@NgModule({
  declarations: [
    HomePageComponent,
    SortingComponent,
    TripDaysComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ]
})
export class HomeModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';


import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home/home-page.component';
import { SortingComponent } from './components/sorting/sorting.component';
<<<<<<< HEAD
import { NewEventComponent } from './components/new-event/new-event.component';
=======
import { TripDaysComponent } from './components/trip-days/trip-days.component';
>>>>>>> 7acdd8c79b1d094a27df5f27029e0bbe9653f8cf

@NgModule({
  declarations: [
    HomePageComponent,
    SortingComponent,
<<<<<<< HEAD
    NewEventComponent,
=======
    TripDaysComponent,
>>>>>>> 7acdd8c79b1d094a27df5f27029e0bbe9653f8cf
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ButtonModule,
    DialogModule,
  ]
})
export class HomeModule { }

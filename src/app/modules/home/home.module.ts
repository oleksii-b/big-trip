import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home/home-page.component';
import { SortingComponent } from './components/sorting/sorting.component';
import { NewEventComponent } from './components/new-event/new-event.component';

@NgModule({
  declarations: [
    HomePageComponent,
    SortingComponent,
    NewEventComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ButtonModule,
    DialogModule,
  ]
})
export class HomeModule { }

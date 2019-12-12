import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './pages/home/home-page.component';
import { StatsPageComponent } from './pages/stats/stats-page.component';
import { path } from './path';

const { home, stats } = path;

const routes: Routes = [
  {
    path: home,
    component: HomePageComponent,
    pathMatch:' full',
  },
  {
    path: stats,
    component: StatsPageComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}

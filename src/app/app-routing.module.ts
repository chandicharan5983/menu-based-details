import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsPageComponent } from './details-page/details-page.component';
import { SportsListComponent } from './sports-list/sports-list.component';
import { SportDetailComponent } from './sport-detail/sport-detail.component';

const routes: Routes = [
  { path: '', component: SportsListComponent },
  { path: 'details', component: DetailsPageComponent },
  { path: 'sports', component: SportsListComponent },
  { path: 'sports/:id', component: SportDetailComponent },

  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

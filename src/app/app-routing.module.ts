import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsPageComponent } from './details-page/details-page.component';

const routes: Routes = [
  { path: '', component: DetailsPageComponent },
  { path: 'details', component: DetailsPageComponent },
  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

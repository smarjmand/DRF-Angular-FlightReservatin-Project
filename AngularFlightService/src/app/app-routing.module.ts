import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FindFlightsComponent} from './components/find-flights/find-flights.component';
import {DisplayFlightsComponent} from './components/display-flights/display-flights.component';
import {PassengerDetailComponent} from './components/passenger-detail/passenger-detail.component';
import {ConfirmComponent} from './components/confirm/confirm.component';

const routes: Routes = [
  {'path':'findFlights', component:FindFlightsComponent},
  {'path':'displayFlights', component:DisplayFlightsComponent},
  {'path':'passengerDetails/:id', component:PassengerDetailComponent},
  {'path':'confirmReservation/:id', component:ConfirmComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

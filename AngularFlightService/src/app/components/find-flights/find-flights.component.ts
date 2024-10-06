import {Component, OnInit} from '@angular/core';
import {Criteria} from '../../model/criteria';
import {LoginService} from '../../services/login.service';
import {ReservationService} from '../../services/reservation.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-find-flights',
  templateUrl: './find-flights.component.html',
  styleUrl: './find-flights.component.css'
})
export class FindFlightsComponent{

  // --------------------------------------------------------
  criteria:Criteria = new Criteria('', '', '');


  // --------------------------------------------------------
  constructor(
    private loginService:LoginService,
    private service:ReservationService,
    private router:Router

  ) {}


  // --------------------------------------------------------
  public onSubmit(){
    this.service.getAllFlights(this.criteria).subscribe(
      (res:any)=>{
        this.service.flightData = res;
        this.router.navigate(['/displayFlights']).then(success => {
          console.log('onSubmit in findFlights ')
        })
      }
    )
  }

}

import {Component, OnInit} from '@angular/core';
import {ReservationService} from '../../services/reservation.service';
import {LoginService} from '../../services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-display-flights',
  templateUrl: './display-flights.component.html',
  styleUrl: './display-flights.component.css'
})
export class DisplayFlightsComponent implements OnInit{

  // --------------------------------------------------------
  data:any;



  // --------------------------------------------------------
  constructor(
    private service:ReservationService,
    private loginService:LoginService,
    private router:Router
  ) {}



  // --------------------------------------------------------
  ngOnInit() {
    this.data = this.service.flightData;
  }


  // --------------------------------------------------------
  public onSelect(id:Number):any{
    this.router.navigate(['/passengerDetails/'+id]).then(success => {
      console.log('onSelect in displayFlights ')
    })
  }




}

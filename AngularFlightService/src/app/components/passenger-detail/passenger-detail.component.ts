import {Component, OnInit} from '@angular/core';
import {LoginService} from '../../services/login.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ReservationService} from '../../services/reservation.service';
import {Reservation} from '../../model/reservation';
import {SuccessReservation} from '../../model/successReservation';

@Component({
  selector: 'app-passenger-detail',
  templateUrl: './passenger-detail.component.html',
  styleUrl: './passenger-detail.component.css'
})
export class PassengerDetailComponent implements OnInit{

  // --------------------------------------------------------
  public flightData:any;
  reservation:Reservation = new Reservation('', '', '', '', '')



  // --------------------------------------------------------
  constructor(
    private loginService:LoginService,
    private router:Router,
    private route:ActivatedRoute,
    private service:ReservationService
  ) {}



  // --------------------------------------------------------
  ngOnInit() {
    // ----------------------------------
    this.loginService.login().then(success => {
      console.log('login successful : passengerDetail')
    });
    // ----------------------------------
    let numID = this.route.snapshot.paramMap.get('id');
    let idParam = Number.parseInt(numID ?? '0');
    this.service.getSingleFlight(idParam).subscribe(
      (res:any) => {
        this.flightData = res;
      }
    )
  }



  // --------------------------------------------------------
  public onSubmit(){
    this.reservation.flightId = this.flightData.id
    this.service.saveReservation(this.reservation).subscribe(
      (res:any)=>{
        console.log('Response: ', res)
        this.router.navigate(
          ['/confirmReservation/', res.id],
          {queryParams:{
              flightData: JSON.stringify(this.flightData),
              passengerData: JSON.stringify(this.reservation)
            }}
        ).then(success=>{
          console.log('navigate: from passengerDetail to Confirm')
        })
      }
    )
  }



}

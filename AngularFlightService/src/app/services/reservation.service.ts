import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoginService} from './login.service';
import {Criteria} from '../model/criteria';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  flightsUrl:string = 'http://127.0.0.1:8000/flight-service/find-flights/';
  singleFlightUrl:string = 'http://127.0.0.1:8000/flight-service/flights/';
  saveReservationUrl:string = "http://127.0.0.1:8000/flight-service/reserve-flight/";
  reservationDetail:string = 'http://127.0.0.1:8000/flight-service/reservation/';
  flightData:any;


  // --------------------------------------------------------
  constructor(
    private http:HttpClient, private loginService:LoginService
  ) { }

  // --------------------------------------------------------
  public getAllFlights(criteria:Criteria):any{
    return this.http.post(
      this.flightsUrl, criteria, this.loginService.httpOptions
    )
  }


  // ----------------------------
  public getSingleFlight(id:Number):any {
    return this.http.get(
      this.singleFlightUrl+id+'/', this.loginService.httpOptions
    )
  }


  // ----------------------------
  public saveReservation(reservation:any):any {
    return this.http.post(
      this.saveReservationUrl, reservation, this.loginService.httpOptions
    )
  }


}

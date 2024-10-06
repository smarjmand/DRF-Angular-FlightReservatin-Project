import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrl: './confirm.component.css'
})
export class ConfirmComponent implements OnInit{

  flightData:any;
  passengerData:any;

  constructor(
    private route:ActivatedRoute,
    private router:Router
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.flightData = JSON.parse(params['flightData']);
      this.passengerData = JSON.parse(params['passengerData'])
    })
    console.log('flightData: ', this.flightData)
    console.log('passengerData: ', this.passengerData)
  }

  redirectToFindFlights() {
    this.router.navigate(['/findFlights']);
  }


}

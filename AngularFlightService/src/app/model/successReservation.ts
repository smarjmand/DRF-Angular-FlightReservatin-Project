
export class SuccessReservation{

  constructor(
    public firstName:string,
    public lastName:string,
    public email:string,
    public phone:string,
    public operatingAirline:string,
    public flightNumber:string,
    public departureCity:string,
    public arrivalCity:string,
    public dateOfDeparture:string,
    public estimatedTimeOfDeparture:string
  ) {}

}

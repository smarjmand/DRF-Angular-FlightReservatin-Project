from .models import Flight, Passenger, Reservation
from .serializers import FlightSerializer, PassengerSerializer, ReservationSerializer
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import api_view


# To Get/Create/Update/Delete a flight :
class FlightViewSet(viewsets.ModelViewSet):
    queryset = Flight.objects.all()
    serializer_class = FlightSerializer


# To Get/Create/Update/Delete a passenger :
class PassengerViewSet(viewsets.ModelViewSet):
    queryset = Passenger.objects.all()
    serializer_class = PassengerSerializer


# To Get/Create/Update/Delete a reservation :
class ReservationViewSet(viewsets.ModelViewSet):
    queryset = Reservation.objects.all()
    serializer_class = ReservationSerializer


# to search and flights based on inputs :
@api_view(['POST'])
def find_flights(request):
    flights: Flight = Flight.objects.filter(
        departureCity=request.data.get('departureCity'),
        arrivalCity=request.data.get('arrivalCity'),
        dateOfDeparture=request.data.get('dateOfDeparture'),
        is_available=True
    )

    if not flights:
        msg = {'message': 'No Available Flights'}
        return Response(msg, status.HTTP_404_NOT_FOUND)

    serializer = FlightSerializer(flights, many=True)
    return Response(serializer.data, status.HTTP_200_OK)


# to create a reservation for a passenger :
@api_view(['POST'])
def reserver_flight(request):
    flight = Flight.objects.get(id=request.data.get('flightId'))

    passenger, created = Passenger.objects.get_or_create(
        firstName=request.data.get('firstName'),
        lastName=request.data.get('lastName'),
        email=request.data.get('email'),
        phone=request.data.get('phone')
    )

    reservation = Reservation.objects.create(
        flight_id=flight.id,
        passenger_id=passenger.id
    )

    serializer = ReservationSerializer(reservation, many=False)
    print(serializer.data)
    return Response(serializer.data, status.HTTP_201_CREATED)


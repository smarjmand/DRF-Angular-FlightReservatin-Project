from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token
from django.conf import settings


class Flight(models.Model):
    flightNumber = models.CharField(max_length=20)
    operatingAirlines = models.CharField(max_length=50)
    departureCity = models.CharField(max_length=20)
    arrivalCity = models.CharField(max_length=20)
    dateOfDeparture = models.DateField()
    estimatedTimeOfDeparture = models.TimeField()
    is_available = models.BooleanField(default=True)

    def __str__(self):
        return f'{self.departureCity} to {self.arrivalCity}'


class Passenger(models.Model):
    firstName = models.CharField(max_length=50)
    lastName = models.CharField(max_length=50)
    email = models.EmailField()
    phone = models.CharField(max_length=20)

    def __str__(self):
        return self.firstName+' '+self.lastName


class Reservation(models.Model):
    flight = models.ForeignKey(Flight, on_delete=models.CASCADE, related_name='flight')
    passenger = models.ForeignKey(Passenger, on_delete=models.CASCADE, related_name='passenger')

    def __str__(self):
        return f'passenger: {self.passenger} / flight: {self.flight}'


# to generate a token after creating a new user :
@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance, created, **kwargs):
    if created:
        Token.objects.create(user=instance)

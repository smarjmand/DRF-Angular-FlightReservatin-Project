from rest_framework.routers import DefaultRouter
from django.urls import path, include
from . import views

router = DefaultRouter()
router.register('flights', views.FlightViewSet)
router.register('passengers', views.PassengerViewSet)
router.register('reservation', views.ReservationViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('find-flights/', views.find_flights),
    path('reserve-flight/', views.reserver_flight)
]

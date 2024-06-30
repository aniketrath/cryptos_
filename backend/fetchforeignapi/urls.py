from django.urls import path
from . import views
from django.urls import path

urlpatterns = [
   path('getdata', views.get_coin_ticker_data),
]

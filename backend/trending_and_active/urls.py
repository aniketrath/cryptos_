from django.urls import path
from . import views

urlpatterns = [
   path('get_data', views.get_active_and_trending),
   path('populate', views.populate_active_and_trending),
   path('getcurrentcoin', views.get_current_coin_stat),
]

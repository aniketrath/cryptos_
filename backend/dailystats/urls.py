from django.urls import path
from . import views

urlpatterns = [
   path('get_performance_data', views.get_daily_performers),
   path('populate' , views.populate_popular_coins),
   path('get_popular_coins' , views.get_popular_coins)
]

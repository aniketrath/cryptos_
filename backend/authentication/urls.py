from django.urls import path
from . import views

urlpatterns = [
     path('logout/', views.LogoutView.as_view(), name ='logout'),
     path('home/', views.HomeView.as_view(), name ='home')
]
from django.urls import path, include 
from . import views
from . import admin
from .views import quiz_view



urlpatterns = [
    
    path('Home/', views.Home, name='Home'),
    path ('content/', views.content, name='content'),
    path ('Revision/', views.Revision, name= "Revision"),
    path (' login/', views.login, name='Login' ),
    path('Quiz/', views.Quiz, name = 'Quiz'),
    path('layout/', views.layout, name = 'layout')
]
    


   


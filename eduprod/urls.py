from django.urls import path, include 
from . import views
from . import admin
from .views import quiz_view

# Define the URL patterns for the application
urlpatterns = [
    path('Home/', views.Home, name='Home'),  # URL pattern for the Home view
    path ('content/', views.content, name='content'),  # URL pattern for the Content view
    path ('Revision/', views.Revision, name= "Revision"),  # URL pattern for the Revision view
    path (' login/', views.login, name='Login' ),  # URL pattern for the Login view
    path('Quiz/', views.Quiz, name = 'Quiz'),  # URL pattern for the Quiz view
    path('layout/', views.layout, name = 'layout')  # URL pattern for the Layout view
]

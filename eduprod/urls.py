from django.urls import path, include 
from . import views
from . import admin
from .views import quiz_view



urlpatterns = [
    path('index/', views.index, name='index'),
    path('Home/', views.Home, name='Home'),
    path ('content/', views.content, name='content'),
    path ('Revision/', views.Revision, name= "Revision"),
    path (' login/', views.login, name='Login' ),
    path('questions/', views.revision_view, name='question_list'),
    path('testquiz/',views.testquiz, name ='Testquiz'),
    path('Quiz/', views.Quiz, name = 'Quiz'),
    path('layout/', views.layout, name = 'layout')
]
    


   


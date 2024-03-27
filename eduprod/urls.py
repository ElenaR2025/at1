from django.urls import path, include 
from . import views
from . import admin
from .views import quiz_view



urlpatterns = [
    path('', views.index, name='index'),
    path('Test2/', views.Test2, name='Test2'),
    path ('content/', views.content, name='content'),
    path ('Revision/', views.Revision, name= "Revision"),
    path (' login/', views.login, name='Login' ),
    path('questions/', views.revision_view, name='question_list'),
]
    


   


from django.urls import path, include 
from . import views
from . import admin



urlpatterns = [
    path('', views.index, name='index'),
    path('Test2/', views.Test2, name='Test2'),
    path ('content/', views.content, name='content'),
    path ('Revision/', views.Revision, name= "Revision")
    

   
]

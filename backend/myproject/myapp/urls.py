from django.urls import path
from . import views

urlpatterns=[
    path('todo/', views.todo, name='todo'),
    path('todo/<int:pk>', views.tododetails, name='tododetails'),
    path('login/', views.LoginAPIView, name='login'),
    path('register/', views.RegisterAPIView, name='register'),
]

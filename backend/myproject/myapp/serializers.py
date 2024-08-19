from rest_framework import serializers
from .models import todolist
from .models import user
from django.contrib.auth.models import User


class userserializer(serializers.ModelSerializer):
    class Meta:
        model=user
        fields=["username","password"] 

        
class todoserializer(serializers.ModelSerializer):
    class Meta:
        model=todolist
        fields=["id","list_item","list_status","list_user"] 
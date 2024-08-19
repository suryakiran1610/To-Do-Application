from django.shortcuts import render
from django.http import HttpResponse
from .models import todolist
from .models import user
from .serializers import todoserializer
from .serializers import userserializer
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from django.shortcuts import get_object_or_404
from django.contrib.auth import authenticate
from rest_framework.authtoken.models import Token
from rest_framework.decorators import permission_classes, authentication_classes
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated


@api_view(['GET','POST'])
def todo(request):
    if request.method == "GET":
        user_id = request.query_params.get('user_id')
        if user_id:
            todo = todolist.objects.filter(list_user=user_id)
            serializer = todoserializer(todo, many=True)
            return Response(serializer.data)
        else:
            return Response({"error": "User ID not provided"}, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == "POST":
        serializer = todoserializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)



@api_view(['GET', 'PATCH', 'PUT', 'DELETE'])
def tododetails(request, pk):
    todo = get_object_or_404(todolist, id=pk)

    if request.method == "GET":
        serializer = todoserializer(todo)
        return Response(serializer.data)
    
    elif request.method == "PUT":
        serializer = todoserializer(todo, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == "PATCH":
        serializer = todoserializer(todo, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) 

    elif request.method == "DELETE":
        todo.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
        

@api_view(['POST'])
def RegisterAPIView(request):
    serializer = userserializer(data=request.data)
    if serializer.is_valid():
        username = serializer.validated_data.get('username')
        password = serializer.validated_data.get('password')
        userdata = user.objects.create_user(username=username, password=password)
        user_auth = authenticate(username=username, password=password)
        if user_auth:
            token, created = Token.objects.get_or_create(user=user_auth)
            return Response({'token': token.key})
        else:
            return Response({'error': "Failed to authenticate user."}, status=status.HTTP_401_UNAUTHORIZED)
    else:
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def LoginAPIView(request):
        username=request.data['username']
        password=request.data['password']
        user=authenticate(username=username,password=password)
        if user:
            token,created=Token.objects.get_or_create(user=user)
            return Response({'token':token.key,'userid':user.id})
        else:
            return Response({'error':"invalid credentials"})  



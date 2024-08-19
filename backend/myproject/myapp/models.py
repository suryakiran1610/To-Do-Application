from django.db import models
from django.contrib.auth.models import AbstractUser


class user(AbstractUser):
    pass


class todolist(models.Model):
    list_item=models.CharField(max_length=20)
    list_status=models.CharField(max_length=20)
    list_user=models.ForeignKey(user,on_delete=models.CASCADE,null=True,blank=True)


    def __str__(self):
        return self.list_item
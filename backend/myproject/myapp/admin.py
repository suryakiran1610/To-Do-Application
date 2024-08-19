from django.contrib import admin

from .models import todolist
from .models import user

admin.site.register(todolist)
admin.site.register(user)


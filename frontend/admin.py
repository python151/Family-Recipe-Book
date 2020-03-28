from django.contrib import admin
from .models import Ingredient, Tag, Meal

# Register your models here.
admin.site.register(Ingredient)
admin.site.register(Tag)
admin.site.register(Meal)
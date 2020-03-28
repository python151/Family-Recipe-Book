from django.shortcuts import render, HttpResponse
from frontend.models import Meal, Tag, Ingredient
from django.core import serializers


# Create your views here.
def getDish(request, id):
    meals = Meal.objects.all()
    data = serializers('json', meals)
    return HttpResponse(request, data)

def editDish(request, id):
    data = {}
    return HttpResponse(request, data)

def deleteDish(request, id):
    data = {}
    return HttpResponse(request, data)

def addDish(request, id):
    data = {}
    return HttpResponse(request, data)

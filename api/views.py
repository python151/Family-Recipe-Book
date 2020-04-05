from django.shortcuts import render, HttpResponse
from frontend.models import Meal, Tag, Ingredient
from django.core import serializers
from django.http import JsonResponse


# Create your views here.
def getDish(request):
    meals = Meal.objects.all()
    ret = []
    for meal in meals:
        ret.append({
            "name": meal.name,
            "description": meal.description,
            "tags": [tag.name for tag in meal.tags.all()],
            "ingridiant": [ingridiant.name for ingridiant in meal.ingredients.all()],
        })
    return JsonResponse({"data":ret})

def editDish(request, id):
    data = {}
    return HttpResponse(request, data)

def deleteDish(request, id):
    data = {}
    return HttpResponse(request, data)

def addDish(request, id):
    data = {}
    return HttpResponse(request, data)

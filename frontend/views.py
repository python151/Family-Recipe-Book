from django.shortcuts import render, redirect
from .models import Meal, Tag, Ingredient


# Create your views here.
def index(request):
    return render(request, 'index.html', {"dishes" : Meal.objects.all()})

def search(request):
    data = request.POST.dict()

    ret = []

    return render(request, 'search.html', {'results' : ret})

def addDish(request):
    data = request.POST.dict()
    name = data.get("name")
    description = data.get("description")

    mealObj = Meal.objects.create(name=name, description=description)

    for tagName in data.get("tags").split(" "):
        tag = Tag.objects.create(name=tagName)
        mealObj.tags.add(tag)
    
    for iName in data.get("ingridiants").split(" "):
        ingredient = Ingredient.objects.create(name=iName)
        mealObj.ingredients.add(ingredient)
    
    return redirect('/')

def editDish(request, id):
    Meal.objects.filter(id=id).get().delete()

    data = request.POST.dict()
    name = data.get("name")
    description = data.get("description")

    mealObj = Meal.objects.create(name=name, description=description)

    for tagName in data.get("tags").split(" "):
        tag = Tag.objects.create(name=tagName)
        mealObj.tags.add(tag)
    
    for iName in data.get("ingridiants").split(" "):
        ingredient = Ingredient.objects.create(name=iName)
        mealObj.ingredients.add(ingredient)
    
    return redirect('/')

def deleteDish(request, id):
    Meal.objects.filter(id=id).get().delete()
    return redirect('/')
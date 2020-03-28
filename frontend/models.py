from django.db import models

# Create your models here.
class Ingredient(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    class Meta():
        app_label="frontend"

class Tag(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    class Meta():
        app_label="frontend"

class Meal(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=100)
    ingredients = models.ManyToManyField(Ingredient)
    tags = models.ManyToManyField(Tag)
    class Meta():
        app_label="frontend"
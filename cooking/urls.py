"""cooking URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
import frontend.views as frontend
import api.views as api

urlpatterns = [
    path('admin/', admin.site.urls),

    path('', frontend.index),
    
    path('search/', frontend.search),
    path('add/dish', frontend.addDish),

    path('change/dish/<int:id>', frontend.editDish),
    path('delete/dish/<int:id>', frontend.deleteDish),

    path('api/get/dish', api.getDish),
    path('api/change/dish/<int:id>/', api.editDish),
    path('api/delete/dish/<int:id>/', api.deleteDish),
    path('api/add/dish/', api.addDish),
]

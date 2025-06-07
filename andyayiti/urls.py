from django.urls import path
from . import views




app_name = 'andyayiti'

urlpatterns = [
    path('', views.index, name='index'),
    path('blogs/', views.blog, name='blog'),
    path('videos/', views.videos, name='videos'),
    path('gallery/', views.gallery, name='gallery'),
    path('about/', views.about, name='about'),
    path('contact/', views.contact, name='contact'),
    
]
from django.urls import path
from . import views
urlpatterns = [
    path('', views.landing_page, name='landing_page'),
    path('team/', views.about_page, name='about_page'),
    path('robots/', views.robo_gallery, name='robo_gallery'),
    path('projects/', views.projects_page, name='projects_page'),
    path('achievements/', views.achievements_page, name='achievements_page'),
]

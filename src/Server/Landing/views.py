from django.shortcuts import render

# Create your views here.



def landing_page(request):
    """
    Render the landing page.
    """
    return render(request, 'Landing/home.html')

def about_page(request):
    """
    Render the about page.
    """
    return render(request, 'Landing/about.html')

def robo_gallery(request):
    """
    Render the Robo Gallery page.
    """
    return render(request, 'Landing/robots.html')

def projects_page(request):
    """
    Render the projects page.
    """
    return render(request, 'Landing/projects.html')

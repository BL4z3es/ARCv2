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



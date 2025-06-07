from django.shortcuts import render

# Create your views here.

def index(request):
    return render(request, 'andyayiti/index.html')






def blog(request):
    return render(request, 'andyayiti/blog.html')








def videos(request):
    return render(request, 'andyayiti/videos.html')





def gallery(request):
    return render(request, 'andyayiti/gallery.html')





def about(request):
    return render(request, 'andyayiti/about.html')






def contact(request):
    return render(request, 'andyayiti/contact.html')





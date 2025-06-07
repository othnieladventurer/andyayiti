from django.contrib import admin
from unfold.admin import ModelAdmin
from .models import *


# Register your models here.
@admin.register(BlogPost)
class BlogPostAdmin(ModelAdmin):
    pass

@admin.register(VideoPost)
class VideoPostAdmin(ModelAdmin):
    pass

@admin.register(GalleryPhoto)
class GalleryPhotoAdmin(ModelAdmin):
    pass

from django.db import models
from django.utils import timezone
from django.utils.text import slugify
from django_ckeditor_5.fields import CKEditor5Field

# Create your models here.
class BlogPost(models.Model):
    title = models.CharField(max_length=255)
    thumbnail = models.ImageField(upload_to='blog_thumbnails/')
    content = CKEditor5Field()
    slug = models.SlugField(unique=True, max_length=255)
    date_created = models.DateTimeField(default=timezone.now)

    def save(self, *args, **kwargs):
        # Automatically create slug if not provided
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title




class VideoPost(models.Model):
    title = models.CharField(max_length=255)
    description = CKEditor5Field()
    cover_image = models.ImageField(upload_to='video_covers/')
    video_file = models.FileField(upload_to='videos/', blank=True, null=True)
    video_url = models.URLField(blank=True, null=True)
    slug = models.SlugField(unique=True, max_length=255)
    date_created = models.DateTimeField(default=timezone.now)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title




class GalleryPhoto(models.Model):
    image = models.ImageField(upload_to='gallery_photos/')
    caption = models.CharField(max_length=255, blank=True)
    date_uploaded = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.caption or f"Photo {self.id}"




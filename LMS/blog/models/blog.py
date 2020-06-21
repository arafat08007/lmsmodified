from django.db import models
from django.urls import reverse
from django.conf import settings
from django.utils import timezone
from django.db.models.signals import pre_save

from ckeditor.fields import RichTextField
from ckeditor_uploader.fields import RichTextUploadingField

from blog.models import Tag

from lms.utils import unique_slug_generator
from lms.utils_file import upload_image_path

User = settings.AUTH_USER_MODEL


# Create your Blog manager
class BlogManager(models.Manager):
    pass


# Create your models here.
class Blog(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=250)
    cover_image = models.FileField(upload_to=upload_image_path, null=True)
    video = models.URLField(max_length=300, null=True, blank=True)
    content = RichTextUploadingField()
    tags = models.ManyToManyField(Tag, blank=True)
    active = models.BooleanField(default=True)
    timestamp = models.DateField(default=timezone.now)
    slug = models.SlugField(blank=True, unique=True)

    class Meta:
        ordering = ['-timestamp']

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse("blog-detail", kwargs={"slug": self.slug})

    def get_absolute_update_url(self):
        return reverse("update-blog-post", kwargs={"slug": self.slug})

    def get_absolute_delete_url(self):
        return reverse("delete-blog-post", kwargs={"slug": self.slug})


def post_pre_save_receiver(sender, instance, *args, **kwargs):
    if not instance.slug:
        instance.slug = unique_slug_generator(instance)


pre_save.connect(post_pre_save_receiver, sender=Blog)

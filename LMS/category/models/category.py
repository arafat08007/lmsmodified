from django.db import models
from django.db.models.signals import pre_save
from django.urls import reverse

from lms.utils import unique_slug_generator


# Subcategory Manager
class CategoryManager(models.Manager):
    pass


# Category models
class Category(models.Model):
    category = models.CharField('Category name', max_length=200)
    created_at = models.DateField(auto_now_add=True, blank=True, null=True)
    icon = models.CharField(max_length=25, null=True, blank=True)
    slug = models.SlugField(blank=True, unique=True, null=True)

    objects = CategoryManager()

    def __str__(self):
        return self.category

    @property
    def title(self):
        return self.category

    def get_absolute_url(self):
        return reverse('category', kwargs={"slug": self.slug})


def category_pre_save_receiver(sender, instance, *args, **kwargs):
    if not instance.slug:
        instance.slug = unique_slug_generator(instance)


pre_save.connect(category_pre_save_receiver, sender=Category)

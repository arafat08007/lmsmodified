from django.db import models
from django.utils import timezone
from django.db.models.signals import pre_save

from lms.utils import unique_slug_generator

from courses.models import Lessons


# Lessons manager
class SectionsManager(models.Manager):
    pass


# Lessons model
class Section(models.Model):
    lesson_of = models.ForeignKey(Lessons, on_delete=models.CASCADE)
    section_title = models.CharField('Section Title: ', max_length=150, blank=True, null=True)
    lessons_intro_video = models.URLField(max_length=250)
    lessons_duration = models.CharField('Duration', max_length=10)
    is_active = models.BooleanField('Active', default=True)
    created_at = models.DateField(default=timezone.now)
    # slug = models.SlugField(blank=True, unique=True)

    objects = SectionsManager

    def __str__(self):
        return '{}'.format(self.section_title)

#     @property
#     def title(self):
#         return self.section_title
#
#
# def courses_pre_save_receiver(sender, instance, *args, **kwargs):
#     if not instance.slug:
#         instance.slug = unique_slug_generator(instance)
#
#
# pre_save.connect(courses_pre_save_receiver, sender=Section)

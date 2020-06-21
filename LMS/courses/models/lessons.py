from django.db import models
from django.utils import timezone
from django.urls import reverse
from django.db.models.signals import pre_save

from lms.utils import unique_slug_generator

from courses.models import Courses


# Lessons manager
class LessonsManager(models.Manager):
    pass


# Lessons model
class Lessons(models.Model):
    course_of = models.ForeignKey(Courses, on_delete=models.CASCADE)
    lesson_title = models.CharField('Lessons title', max_length=200, blank=True, null=True)
    description = models.TextField(max_length=800, null=True, blank=True)
    lessons_intro_video = models.URLField(max_length=250)
    lessons_duration = models.CharField('Duration', max_length=20, blank=True, null=True)
    is_active = models.BooleanField('Active', default=True)
    is_locked = models.BooleanField('Active', default=True)
    created_at = models.DateField(default=timezone.now)
    # slug = models.SlugField(blank=True, unique=True)

    objects = LessonsManager

    def __str__(self):
        return '{}'.format(self.lesson_title)

#     @property
#     def title(self):
#         return self.lesson_title
#
#     def get_absolute_lessons_url(self):
#         return reverse('course-detail', kwargs={"slug": self.slug})
#
#
# def courses_pre_save_receiver(sender, instance, *args, **kwargs):
#     if not instance.slug:
#         instance.slug = unique_slug_generator(instance)
#
#
# pre_save.connect(courses_pre_save_receiver, sender=Lessons)

from django.db import models
from django.utils import timezone
from django.db.models.signals import pre_save

from lms.utils import unique_slug_generator

from courses.models import Section


# Lessons manager
class TopicManager(models.Manager):
    pass


# Lessons model
class Topic(models.Model):
    section_of = models.ForeignKey(Section, on_delete=models.CASCADE)
    topic_title = models.CharField('Topic Title: ', max_length=150, blank=True, null=True)
    lessons_video = models.URLField(max_length=250)
    lessons_duration = models.CharField('Duration', max_length=3, blank=True, null=True)
    is_active = models.BooleanField('Active', default=True)
    created_at = models.DateField(default=timezone.now)
    # slug = models.SlugField(blank=True, unique=True)

    objects = TopicManager

    def __str__(self):
        return '{}'.format(self.topic_title)

#     @property
#     def title(self):
#         return self.topic_title
#
#
# def courses_pre_save_receiver(sender, instance, *args, **kwargs):
#     if not instance.slug:
#         instance.slug = unique_slug_generator(instance)
#
#
# pre_save.connect(courses_pre_save_receiver, sender=Topic)

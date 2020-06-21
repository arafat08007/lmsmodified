from django.db import models
from django.utils import timezone

from courses.models import Courses

from django.contrib.auth import get_user_model

User = get_user_model()


# Top views manager
class TopViewManager(models.Manager):
    pass


# Top views model
class TopView(models.Model):
    course_id = models.ForeignKey(Courses, on_delete=models.CASCADE)
    visitor = models.IntegerField(default=0, blank=True, null=True)
    modified = models.DateField(auto_now_add=True, blank=True, null=True)

    def __str__(self):
        return self.course_id


# visitor feedback
class Testimonial(models.Model):
    testimonial_title = models.CharField('Title', max_length=100, blank=True, null=True)
    testimonial = models.TextField('Your feedback', max_length=500, blank=True, null=True)
    visitor_ip = models.CharField('Visitor IP', max_length=20, blank=True, null=True)
    visitor_name = models.CharField('Your name', max_length=100, blank=False, null=True)
    visitor_email = models.EmailField('Your email', max_length=150, blank=True, null=True)
    visitor_rating = models.CharField('Your rating out of 5', max_length=2, default=5)
    isRegistered = models.BooleanField(default=False)
    modified = models.DateField(auto_now_add=True, blank=True, null=True)
    feedback_user = models.ForeignKey(User, on_delete=models.CASCADE, default='1', blank=True, null=True)

    def __str__(self):
        return self.testimonial_title

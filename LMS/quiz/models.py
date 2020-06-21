from django.db import models
from django.utils import timezone
from django.utils.crypto import get_random_string
from django.db.models.signals import pre_save

from courses.models import Courses
from courses.models import Lessons

from lms.utils import unique_slug_generator

QuizAns = (
    ('quiz_ans_01', ''),
    ('quiz_ans_02', ''),
    ('quiz_ans_03', ''),
    ('quiz_ans_04', ''),
)


class QuizManager(models.Manager):
    pass


# Create your models here.
class Quiz(models.Model):
    title = models.CharField(max_length=250, null=False, blank=True)
    quiz_detail = models.TextField(max_length=600, null=False, blank=True)
    quiz_ans_1 = models.CharField(choices=QuizAns, max_length=50)
    quz_correct_ans = models.IntegerField()
    course = models.ForeignKey(Courses, on_delete=models.CASCADE, null=True, blank=True)
    lesson = models.ForeignKey(Lessons, on_delete=models.CASCADE, null=True, blank=True)

    objects = QuizManager

    def __str__(self):
        return self.title


def courses_pre_save_receiver(sender, instance, *args, **kwargs):
    if not instance.slug:
        instance.slug = unique_slug_generator(Quiz)


pre_save.connect(courses_pre_save_receiver, sender=Courses)

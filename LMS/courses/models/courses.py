from django.db import models
from django.conf import settings
from django.utils import timezone
from django.utils.crypto import get_random_string

from django.urls import reverse
from django.db.models.signals import pre_save

from ckeditor.fields import RichTextField
from ckeditor_uploader.fields import RichTextUploadingField

from lms.utils import unique_slug_generator

# from accounts.models import User
# from .course_videos import CourseVideos
from category.models import Category, Subcategory

from lms.utils_file import upload_image_path

User = settings.AUTH_USER_MODEL

CourseFor = (
    ('beginner', ' BEGINNER'),
    ('intermediate', 'INTERMEDIATE'),
    ('advance', 'ADVANCED'),
)


def generate_nine_digit_random_number():
    return get_random_string(length=9, allowed_chars='0123456789ABCDEFGHIJKLMONPQRSTUVWXYZ')


# Create your queryset here.
class CoursesQuerySet(models.QuerySet):
    def category(self, category):
        return Courses.objects.filter(category__iexact=category)


# Create your manager here.
class CoursesManager(models.Manager):
    def get_queryset(self):
        return CoursesQuerySet(self.model, using=self._db)

    def category(self, category):
        return self.get_queryset().category(category)


# Course models
class Courses(models.Model):
    course_id = models.CharField(unique=True, blank=True, max_length=10)
    title = models.CharField('Course Title', max_length=200, null=True, blank=True)
    course_short_description = models.TextField('Course details', max_length=200, null=True, blank=True)
    course_long_description = RichTextUploadingField()
    will_learn = RichTextField()
    course_image = models.FileField('Course cover image', upload_to=upload_image_path, blank=True, null=True)
    course_intro_video = models.URLField('Course video url', max_length=500, null=True, blank=True)
    course_complete_duration = models.CharField('Duration', max_length=10)
    course_for = models.CharField(choices=CourseFor, max_length=20, default='Select For')
    instructor_id = models.ForeignKey(User, on_delete=models.CASCADE)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    subcategory = models.ForeignKey(Subcategory, on_delete=models.CASCADE)
    is_active = models.BooleanField('Active', default=True)
    is_featured = models.BooleanField('Featured course', default=True)
    is_locked = models.BooleanField(default=True)
    created_at = models.DateField(default=timezone.now)
    slug = models.SlugField(blank=True, unique=True)

    objects = CoursesManager()

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse('course-detail', kwargs={"slug": self.slug})

    def get_absolute_update_url(self):
        return reverse("update-courses", kwargs={"slug": self.slug})

    def get_absolute_delete_url(self):
        return reverse("delete-courses", kwargs={"slug": self.slug})


def courses_pre_save_receiver(sender, instance, *args, **kwargs):
    if not instance.slug:
        instance.slug = unique_slug_generator(instance)


def courses_pre_unique_key_save_receiver(sender, instance, *args, **kwargs):
    if not instance.course_id:
        instance.course_id = generate_nine_digit_random_number()


pre_save.connect(courses_pre_save_receiver, sender=Courses)
pre_save.connect(courses_pre_unique_key_save_receiver, sender=Courses)

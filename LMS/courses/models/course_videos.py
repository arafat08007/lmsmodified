from django.db import models


# Course Model Manager
class CourseVideosManager(models.Manager):
    pass


# Course models
class CourseVideos(models.Model):
    video_title_01 = models.CharField(max_length=150, null=True, blank=True)
    video_01 = models.URLField(max_length=500, null=True, blank=True)
    video_duration_01 = models.CharField(max_length=10, null=True, blank=True)

    objects = CourseVideosManager()

    def __str__(self):
        return self.video_title_01

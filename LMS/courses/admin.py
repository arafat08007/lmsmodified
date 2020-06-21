from django.contrib import admin
from .models import Courses, Lessons, CourseVideos, Section, Topic


# Register your models here.
admin.site.register(Courses)
admin.site.register(Lessons)
admin.site.register(CourseVideos)
admin.site.register(Section)
admin.site.register(Topic)

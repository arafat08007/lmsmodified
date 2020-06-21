from django import forms
from django.utils import timezone

from courses.models import Courses, Lessons, Section, Topic
from blog.models import Blog


# Create your form here.
class DateTimeInput(forms.DateTimeInput):
    input_type = 'date'


class CreateBlogPostFrom(forms.ModelForm):

    class Meta:
        model = Blog
        fields = [
            'title',
            'cover_image',
            'video',
            'content',
            'tags',
            'active',
            # 'timestamp',
            # 'slug',
        ]
        widgets = {
            'timestamp': DateTimeInput(),
        }

        labels = {
            'title': 'Title',
            'cover_image': 'Cover Image',
            'video': 'Video',
            'content': 'Content',
            'tags': 'Tags',
            'active': 'Active',
            # 'timestamp': 'Timestamp',
            # 'slug': 'Slug',
        }


class CreateCourseForm(forms.ModelForm):

    class Meta:
        model = Courses
        fields = [
            'title',
            'course_short_description',
            'course_long_description',
            'will_learn',
            'course_image',
            'course_intro_video',
            'course_complete_duration',
            'course_for',
            'category',
            'subcategory',
            'is_active',
            'is_featured',
            'is_featured',
            'is_locked',
        ]
        labels = {
            'title': 'Title',
            'course_short_description': 'Course Short Description',
            'course_long_description': 'Course Long Description',
            'will_learn': 'What you\'ll learn',
            'course_image': 'Course Image',
            'course_intro_video': 'Course Intro Video',
            'course_complete_duration': 'Course Complete Duration',
            'course_for': 'Course For',
            'category': 'Category',
            'subcategory': 'Subcategory',
            'is_active': 'Is Active',
            'is_featured': 'Is Featured',
            'is_locked': 'Is Locked',
        }

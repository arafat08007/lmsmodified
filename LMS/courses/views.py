from django.shortcuts import render, get_object_or_404
from django.views.generic import TemplateView, ListView, DetailView
from django.db.models import Q
from .models import Courses, Lessons, Section, Topic
from category.models import Category


# Create your views here.
class CoursesListView(ListView):
    paginate_by = 4
    model = Courses
    template_name = 'courses/courses.html'
    context_object_name = 'courses_context'

    def subscription(self):
        pass

    def get_context_data(self, *args, object_list=None, **kwargs):
        context = super().get_context_data(*args, **kwargs)
        context['category_list'] = Category.objects.all()
        context['category_related_list'] = Courses.objects.all()
        return context


class CourseDetailsView(DetailView):
    model = Courses
    template_name = 'courses/course_details.html'

    def get_context_data(self, *args, **kwargs):
        context = super().get_context_data(*args, **kwargs)
        context['title'] = '{}'.format(self.get_object().title)
        context['lessons_context'] = Lessons.objects.filter()
        return context


class CourseIntroView(TemplateView):
    template_name = 'courses/course_intro.html'

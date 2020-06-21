from django.shortcuts import render
from django.views.generic import ListView, TemplateView

from .models import TopView, Testimonial
from courses.models import Courses
from category.models import Subcategory
from blog.models import Blog


# Create your views here.
class HomeListView(ListView):
    paginate_by = 4
    model = Courses
    template_name = 'home/home.html'
    context_object_name = 'home_content'

    def get_context_data(self, *args, **kwargs):
        context = super().get_context_data(*args, **kwargs)
        context['banner_image'] = 'index'
        context['banner_info'] = 'index'
        context['learning_path'] = Subcategory.objects.all()
        context['blog_context'] = Blog.objects.all()[:3]
        context['visitor_feedback'] = Testimonial.objects.all()
        return context

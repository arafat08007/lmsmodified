from django.shortcuts import render
from django.views.generic import TemplateView, DetailView

from .models import Blog


# Create your views here.
class BlogDetailsView(DetailView):
    model = Blog
    template_name = 'blog/blog_details.html'
    context_object_name = 'c_blog'

    def get_context_data(self, *args, **kwargs):
        context = super().get_context_data(*args, **kwargs)
        context['title'] = '{}'.format(self.get_object().title)
        return context

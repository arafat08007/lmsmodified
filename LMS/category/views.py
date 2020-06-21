from django.shortcuts import render, get_object_or_404
from django.views.generic import TemplateView, ListView
from django.db.models import Q

from courses.models import Courses
from category.models import Category


# Create your views here.
class CategoryListView(ListView):
    model = Courses
    template_name = 'category/category_view.html'
    context_object_name = 'category_context'

    def get_queryset(self):
        category = get_object_or_404(Category, slug=self.kwargs['slug'])
        return Courses.objects.filter(category=category)

    def get_context_data(self, *args, **kwargs):
        context = super().get_context_data(*args, **kwargs)
        context['category_list'] = Category.objects.all()
        context['title'] = 'Category'
        return context

    # def get_queryset(self, *args, **kwargs):
    #     category_slug = self.kwargs.get('slug', None)
    #     if category_slug:
    #         return Post.objects.category(category_slug)


class SubcategoryListView(TemplateView):
    template_name = 'subcategory_view.html'

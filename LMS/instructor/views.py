from django.shortcuts import render, reverse
from django.contrib.auth.mixins import LoginRequiredMixin
from django.views.generic import TemplateView, ListView, DetailView, CreateView, UpdateView

from .forms import CreateBlogPostFrom, CreateCourseForm

from category.models import Category
from blog.models import Blog
from courses.models import Courses, Lessons, Section, Topic


# Create your views here.
class InstructorProfileView(ListView, LoginRequiredMixin):
    model = Courses
    paginate_by = 4
    context_object_name = 'course_list_by_user'
    template_name = 'instructor/instructor-dashboard.html'

    def get_context_data(self, *args, **kwargs):
        context = super().get_context_data(*args, **kwargs)
        context['title'] = 'Dashboard'
        return context

    def get_queryset(self):
        return Courses.objects.filter(instructor_id=self.request.user)

    def get_login_url(self):
        return reverse('login')


class InstructorManageBlog(ListView, LoginRequiredMixin):
    model = Blog
    paginate_by = 4
    login_url = '/account/login/'
    context_object_name = 'blog_list_by_user'
    template_name = 'instructor/manage_blog.html'

    def get_context_data(self, *args, **kwargs):
        context = super().get_context_data(*args, **kwargs)
        context['title'] = 'Manage Blog'
        return context

    def get_queryset(self):
        return Blog.objects.filter(user=self.request.user)


class InstructorBlogPostCreateView(CreateView, LoginRequiredMixin):
    form_class = CreateBlogPostFrom
    login_url = '/account/login/'
    success_url = '/instructor/instructor_blog/'
    template_name = 'instructor/create_blog_post.html'

    def form_valid(self, form):
        instance = form.save(commit=False)
        instance.user = self.request.user
        return super().form_valid(form)

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title'] = 'Create Blog'
        return context


class InstructorBlogUpdateView(UpdateView, LoginRequiredMixin):
    form_class = CreateBlogPostFrom
    template_name = 'instructor/create_blog_post.html'

    def get_queryset(self):
        return Blog.objects.filter(user=self.request.user)

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title'] = 'Update Post'
        return context

    def get_success_url(self):
        return reverse('instructor-blog')

    def get_login_url(self):
        return reverse('login')


class InstructorBlogDeleteView(TemplateView, LoginRequiredMixin):
    pass


class InstructorManageCourse(ListView, LoginRequiredMixin):
    model = Courses
    paginate_by = 4
    login_url = '/account/login/'
    context_object_name = 'course_list_by_user'
    template_name = 'instructor/manage-course.html'

    def get_context_data(self, *args, **kwargs):
        context = super().get_context_data(*args, **kwargs)
        context['title'] = 'Dashboard'
        return context

    def get_queryset(self):
        return Courses.objects.filter(instructor_id=self.request.user)


class InstructorCourseCreateView(CreateView, LoginRequiredMixin):
    form_class = CreateCourseForm
    login_url = '/account/login/'
    success_url = '/instructor/instructor_courses/'
    template_name = 'instructor/add-course.html'

    def form_valid(self, form):
        instance = form.save(commit=False)
        instance.instructor_id = self.request.user
        return super().form_valid(form)

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title'] = 'Create Course'
        return context


class InstructorCourseUpdateView(UpdateView, LoginRequiredMixin):
    form_class = CreateCourseForm
    template_name = 'instructor/add-course.html'

    def get_queryset(self):
        return Courses.objects.filter(instructor_id=self.request.user)

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title'] = 'Update Course'
        return context

    def get_success_url(self):
        return reverse('instructor-courses')

    def get_login_url(self):
        return reverse('login')


class InstructorCourseDeleteView(TemplateView, LoginRequiredMixin):
    pass

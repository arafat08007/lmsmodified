from django.urls import path
from .views import (
    InstructorProfileView,

    InstructorManageBlog,
    InstructorBlogPostCreateView,
    InstructorBlogUpdateView,
    InstructorBlogDeleteView,

    InstructorManageCourse,
    InstructorCourseCreateView,
    InstructorCourseUpdateView,
    InstructorCourseDeleteView,
)

urlpatterns = [
    path('', InstructorProfileView.as_view(), name='instructor-dashboard'),

    path('instructor_blog/', InstructorManageBlog.as_view(), name='instructor-blog'),
    path('create_blog/', InstructorBlogPostCreateView.as_view(), name='create-blog-post'),
    path('blog/update/<slug:slug>/', InstructorBlogUpdateView.as_view(), name='update-blog-post'),
    path('blog/delete/<slug:slug>/', InstructorBlogDeleteView.as_view(), name='delete-blog-post'),

    path('instructor_courses/', InstructorManageCourse.as_view(), name='instructor-courses'),
    path('create_courses/', InstructorCourseCreateView.as_view(), name='create-courses'),

    path('course/update/<slug:slug>/', InstructorCourseUpdateView.as_view(), name='update-courses'),
    path('course/delete/<slug:slug>/', InstructorCourseDeleteView.as_view(), name='delete-courses'),
]

from django.urls import path

from .views import (
    CoursesListView,
    CourseDetailsView,
    CourseIntroView,
)


urlpatterns = [
    path('courses/', CoursesListView.as_view(), name='courses'),
    # path('course_detail/', CourseDetailsView.as_view(), name='course-detail'),
    path('course_detail/<slug:slug>/', CourseDetailsView.as_view(), name='course-detail'),
    path('course_intro/', CourseIntroView.as_view(), name='courses-intro'),
]

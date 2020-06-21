from django.urls import path
from .views import BlogDetailsView


urlpatterns = [
    path('blog_detail/<slug:slug>/', BlogDetailsView.as_view(), name='blog-detail')
]

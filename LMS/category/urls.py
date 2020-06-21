from django.urls import path
from .views import (
    CategoryListView,
    SubcategoryListView
)


urlpatterns = [
    path('category/<slug:slug>/', CategoryListView.as_view(), name='category'),
    path('subcategory/<slug:slug>/', SubcategoryListView.as_view(), name='subcategory'),
]

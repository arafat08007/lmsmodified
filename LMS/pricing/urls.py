from django.urls import path
from .views import (
    PricingTemplateView
)

urlpatterns = [
    path('pricing/', PricingTemplateView.as_view(), name='pricing-view'),
]

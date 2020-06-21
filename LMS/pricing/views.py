from django.shortcuts import render
from django.views.generic import TemplateView, ListView

from .models import Pricing, FAQ
from home.models import TopView, Testimonial


# Create your views here.
class PricingTemplateView(ListView):
    model = Pricing
    context_object_name = 'pricing_context'
    template_name = 'pricing/pricing.html'

    def get_context_data(self, *args, **kwargs):
        context = super().get_context_data(*args, **kwargs)
        context['visitor_feedback'] = Testimonial.objects.all()
        context['faq_context'] = FAQ.objects.all()
        return context

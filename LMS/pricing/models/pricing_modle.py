from django.db import models
from django.db.models.signals import pre_save

from lms.utils import unique_slug_generator

PackageFor = (
    ('student', ' Student'),
    ('team', 'Team'),
    ('enterprise', 'Enterprise'),
)

BillCycle = (
    ('month', ' Month'),
    ('year', 'Year'),
)


# Pricing model manager
class PricingManager(models.Manager):
    pass


# Pricing model
class Pricing(models.Model):
    package_title = models.CharField(choices=PackageFor, max_length=20, null=False, blank=False)
    package_desc = models.CharField(max_length=150, null=False, blank=False)
    package_price = models.IntegerField(null=False, blank=False)
    bill_cycle = models.CharField(choices=BillCycle, max_length=10, null=False, blank=False)
    package_icon = models.CharField(max_length=100, null=True, blank=True)
    is_active = models.BooleanField(default=True)
    slug = models.SlugField(blank=True, unique=True)

    objects = PricingManager()

    def __str__(self):
        return self.package_title

    @property
    def title(self):
        return self.package_title


def pricing_pre_save_receiver(sender, instance, *args, **kwargs):
    if not instance.slug:
        instance.slug = unique_slug_generator(instance)


pre_save.connect(pricing_pre_save_receiver, sender=Pricing)

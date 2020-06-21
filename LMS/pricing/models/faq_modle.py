from django.db import models


# FAQ model manager
class FAQManager(models.Manager):
    pass


# FAQ model
class FAQ(models.Model):
    faq_title = models.CharField(max_length=150)
    faq_desc = models.TextField()
    vote = models.IntegerField()
    is_active = models.BooleanField(default=True)

    objects = FAQManager()

    def __str__(self):
        return self.faq_title

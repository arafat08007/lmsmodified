from django.db import models


# Create your models here.
class Role(models.Model):
    role_name = models.CharField('User Role', max_length=150)
    access_mode = models.CharField('Access mode', max_length=10)

    def __str__(self):
        return self.role_name

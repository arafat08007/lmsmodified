# Generated by Django 2.2 on 2020-06-20 09:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pricing', '0002_delete_faqmanager'),
    ]

    operations = [
        migrations.AddField(
            model_name='pricing',
            name='slug',
            field=models.SlugField(blank=True, unique=True),
        ),
    ]

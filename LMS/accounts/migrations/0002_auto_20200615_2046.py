# Generated by Django 2.2 on 2020-06-15 20:46

from django.db import migrations, models
import lms.utils_file


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='about',
            field=models.TextField(blank=True, max_length=400, null=True),
        ),
        migrations.AddField(
            model_name='user',
            name='image',
            field=models.FileField(blank=True, null=True, upload_to=lms.utils_file.upload_image_path, verbose_name='Blog cover image'),
        ),
    ]

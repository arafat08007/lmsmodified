# Generated by Django 2.2 on 2020-06-17 23:00

from django.db import migrations, models
import lms.utils_file


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0005_auto_20200616_0706'),
    ]

    operations = [
        migrations.AlterField(
            model_name='blog',
            name='image',
            field=models.FileField(blank=True, null=True, upload_to=lms.utils_file.upload_image_path),
        ),
    ]
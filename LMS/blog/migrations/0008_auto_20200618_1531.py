# Generated by Django 2.2 on 2020-06-18 15:31

from django.db import migrations, models
import lms.utils_file


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0007_auto_20200618_0810'),
    ]

    operations = [
        migrations.AlterField(
            model_name='blog',
            name='cover_image',
            field=models.FileField(null=True, upload_to=lms.utils_file.upload_image_path),
        ),
    ]
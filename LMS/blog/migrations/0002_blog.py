# Generated by Django 2.2 on 2020-06-15 20:36

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone
import lms.utils_file


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('blog', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Blog',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=250)),
                ('image', models.FileField(blank=True, null=True, upload_to=lms.utils_file.upload_image_path, verbose_name='Blog cover image')),
                ('video', models.URLField(blank=True, max_length=300, null=True)),
                ('content', models.TextField()),
                ('active', models.BooleanField(default=True)),
                ('timestamp', models.DateField(default=django.utils.timezone.now)),
                ('slug', models.SlugField(blank=True, unique=True)),
                ('tags', models.ManyToManyField(blank=True, to='blog.Tag')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'ordering': ['-timestamp'],
            },
        ),
    ]

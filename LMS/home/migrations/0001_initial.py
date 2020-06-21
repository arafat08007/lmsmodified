# Generated by Django 2.2 on 2020-06-14 22:12

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('courses', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='TopView',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('visitor', models.IntegerField(blank=True, default=0, null=True)),
                ('modified', models.DateField(auto_now_add=True, null=True)),
                ('course_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='courses.Courses')),
            ],
        ),
        migrations.CreateModel(
            name='Testimonial',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('testimonial_title', models.CharField(blank=True, max_length=100, null=True, verbose_name='Title')),
                ('testimonial', models.TextField(blank=True, max_length=500, null=True, verbose_name='Your feedback')),
                ('visitor_ip', models.CharField(blank=True, max_length=20, null=True, verbose_name='Visitor IP')),
                ('visitor_name', models.CharField(max_length=100, null=True, verbose_name='Your name')),
                ('visitor_email', models.EmailField(blank=True, max_length=150, null=True, verbose_name='Your email')),
                ('visitor_rating', models.CharField(default=5, max_length=2, verbose_name='Your rating out of 5')),
                ('isRegistered', models.BooleanField(default=False)),
                ('modified', models.DateField(auto_now_add=True, null=True)),
                ('feedback_user', models.ForeignKey(blank=True, default='1', null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]

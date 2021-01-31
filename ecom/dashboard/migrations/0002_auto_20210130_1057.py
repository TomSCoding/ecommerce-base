# Generated by Django 3.1.2 on 2021-01-30 10:57

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('dashboard', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='dashboard',
            name='all_customers',
        ),
        migrations.RemoveField(
            model_name='dashboard',
            name='monthly_sales',
        ),
        migrations.RemoveField(
            model_name='dashboard',
            name='monthly_visitors',
        ),
        migrations.RemoveField(
            model_name='dashboard',
            name='new_customers',
        ),
        migrations.RemoveField(
            model_name='dashboard',
            name='profit',
        ),
        migrations.RemoveField(
            model_name='dashboard',
            name='revenue',
        ),
        migrations.AddField(
            model_name='dashboard',
            name='date',
            field=models.DateTimeField(default=django.utils.timezone.now, editable=False),
        ),
    ]
# Generated by Django 2.2.3 on 2019-08-02 17:23

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0007_auto_20190802_1822'),
    ]

    operations = [
        migrations.AlterField(
            model_name='subproduct',
            name='parent_product',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='products.Product'),
        ),
    ]

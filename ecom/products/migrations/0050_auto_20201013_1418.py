# Generated by Django 2.2.6 on 2020-10-13 14:18

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0049_auto_20201006_2207'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='productimage',
            name='allow_photo_delete',
        ),
        migrations.AlterField(
            model_name='product',
            name='category_id',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='products.Product_categories'),
        ),
        migrations.AlterField(
            model_name='productimage',
            name='product_ref',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='products.Product'),
        ),
        migrations.AlterField(
            model_name='subproduct',
            name='parent_product',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='products.Product'),
        ),
    ]

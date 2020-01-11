# Generated by Django 2.2.3 on 2019-08-02 17:48

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0013_auto_20190802_1846'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='category_id',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='products.Product_categories'),
        ),
        migrations.AlterField(
            model_name='subproduct',
            name='parent_product',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='products.Product'),
        ),
    ]

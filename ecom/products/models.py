import os
from django.db import models
from django.utils.timezone import now
from django.dispatch import receiver
from django.utils.translation import ugettext_lazy as _


def get_image_path(instance, filename):
    return '/'.join(['product_images', str(instance.image_id), filename]) 

# Create your models here.
class Product(models.Model):
    #sku = models.CharField(max_length=15, blank=True)
    #idsku = models.CharField(blank=True, max_length=255)
    #vendor_product_id = models.CharField(max_length=255, blank=True)
    product_name = models.CharField(max_length=255, blank=True, null=True)
    product_unique_name = models.CharField(max_length=255, blank=True, null=True)
    product_description = models.CharField(
        max_length=2000, blank=True, null=True)
    supplier_id = models.CharField(max_length=255, blank=True, null=True)
    category_id = models.ForeignKey(
        'Product_categories', on_delete=models.CASCADE, blank=True, null=True)
    image_id = models.CharField(max_length=255, blank=True, null=True)
    quantity_per_unit = models.IntegerField()
    unit_price = models.DecimalField(
        max_digits=8, decimal_places=2, blank=True, null=True)
    msrp = models.DecimalField(
        max_digits=8, decimal_places=2, blank=True, null=True)
    size = models.CharField(max_length=20, blank=True, null=True)
    color = models.CharField(max_length=20, blank=True, null=True)
    discount = models.DecimalField(
        max_digits=4, decimal_places=2, blank=True, null=True)
    unit_weight = models.DecimalField(max_digits=10, decimal_places=3, blank=True, null=True)
    units_in_stock = models.IntegerField(blank=True, null=True)
    units_on_order = models.IntegerField(blank=True, null=True)
    product_availible = models.BooleanField(
        default=False, blank=True, null=True)
    discount_availible = models.BooleanField(
        default=False, blank=True, null=True)
    discount_price = models.DecimalField(
        max_digits=8, decimal_places=2, blank=True, null=True)
    note = models.CharField(max_length=500, blank=True)
    date = models.DateTimeField(default=now, editable=False)

    def __str__(self):
        return self.product_name

class ProductImage(models.Model):
    product_ref = models.ForeignKey(Product, on_delete=models.CASCADE, blank=True, null=True)
    image_id = models.CharField(max_length=255, blank=True, null=True)
    image_name = models.ImageField(blank=True, null=True, upload_to=get_image_path)
    allow_photo_delete = models.BooleanField(blank=True, null=True, default=False)
'''
# Autodelete method
@receiver(models.signals.post_save, sender=ProductImage)
def allow_file_delete(sender, instance, **kwargs):
    instance.allow_photo_delete = True
    instance.save()

# Autodelete method
@receiver(models.signals.post_delete, sender=ProductImage)
def auto_delete_file_on_delete(sender, instance, **kwargs):
    """
    Deletes file from filesystem
    when corresponding `ProductImage` object is deleted.
    """
    if instance.image_name and instance.allow_photo_delete:
        if os.path.isfile(instance.image_name.path):
            os.remove(os.path.dirname(instance.image_name.path))
'''
# Create your models here.
class Subproduct(models.Model):
    #sku = models.CharField(max_length=15, blank=True)
    #idsku = models.CharField(blank=True, max_length=255)
    #vendor_product_id = models.CharField(max_length=255, blank=True)
    parent_product = models.ForeignKey(Product, on_delete=models.CASCADE)
    product_name = models.CharField(max_length=255)
    product_description = models.CharField(max_length=2000, blank=True)
    supplier_id = models.CharField(max_length=255, blank=True)
    quantity_per_unit = models.IntegerField()
    unit_price = models.DecimalField(max_digits=8, decimal_places=2)
    msrp = models.DecimalField(max_digits=8, decimal_places=2, blank=True)
    size = models.CharField(blank=True, max_length=20)
    color = models.CharField(blank=True, max_length=20) 
    discount = models.DecimalField(max_digits=4, decimal_places=2, blank=True)
    unit_weight = models.DecimalField(max_digits=10, decimal_places=3)
    units_in_stock = models.IntegerField(default=0, blank=True)
    units_on_order = models.IntegerField(default=0, blank=True)
    product_availible = models.BooleanField(default=False)
    discount_availible = models.BooleanField(default=False)
    discount_price = models.DecimalField(max_digits=8, decimal_places=2)
    note = models.CharField(max_length=500, blank=True)
    date = models.DateTimeField(default=now, editable=False)

    def __str__(self):
        return self.product_name + ' ('+ self.parent_product + ')'

class Product_categories(models.Model):
    cat_name = models.CharField(max_length=128, null=False)
    description = models.CharField(max_length=500)
    active = models.BooleanField(default=True, null=False)

    def __str__(self):
        return self.cat_name
    
    def __unicode__(self):
        return u'%s %s' % (self.cat_name)
    


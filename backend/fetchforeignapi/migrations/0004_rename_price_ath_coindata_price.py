# Generated by Django 4.2.13 on 2024-05-12 16:17

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('fetchforeignapi', '0003_rename_price_coindata_price_ath'),
    ]

    operations = [
        migrations.RenameField(
            model_name='coindata',
            old_name='Price_ATH',
            new_name='Price',
        ),
    ]

# Generated by Django 4.2.13 on 2024-05-13 07:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('fetchforeignapi', '0004_rename_price_ath_coindata_price'),
    ]

    operations = [
        migrations.AddField(
            model_name='coindata',
            name='Rank',
            field=models.CharField(max_length=100, null=True),
        ),
    ]

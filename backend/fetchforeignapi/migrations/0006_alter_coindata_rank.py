# Generated by Django 4.2.13 on 2024-05-13 12:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('fetchforeignapi', '0005_coindata_rank'),
    ]

    operations = [
        migrations.AlterField(
            model_name='coindata',
            name='Rank',
            field=models.CharField(max_length=100),
        ),
    ]

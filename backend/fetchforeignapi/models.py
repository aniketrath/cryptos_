from django.db import models
from rest_framework import serializers

class CoinData(models.Model):
    Rank = models.CharField(max_length=100,null=False)
    CoinID = models.CharField(max_length=100,null=True)
    Symbol = models.CharField(max_length=100,null=True)
    Name = models.CharField(max_length=100,null=True)
    Price= models.DecimalField(max_digits=100, decimal_places=4, null=True)
    Volume = models.DecimalField(max_digits=100, decimal_places=4, null=True)
    PercentChange = models.DecimalField(max_digits=100, decimal_places=2, null=True)

class CoinDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = CoinData
        fields = '__all__'  # Or specify the fields you want to include in the response

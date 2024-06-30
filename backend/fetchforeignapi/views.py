import requests
import json
import os
from django.core.paginator import Paginator
from rest_framework.pagination import PageNumberPagination
from .models import CoinData , CoinDataSerializer
from django.shortcuts import render
from rest_framework.response import Response # type: ignore
from rest_framework.decorators import api_view # type: ignore
from django.http import HttpResponse


def fetch_ticker_data(req):
    if os.path.exists('ticker_data.json'):
        os.remove('ticker_data.json')
    # Fetch data from the API
    api_url = 'https://api.coinpaprika.com/v1/tickers'
    response = requests.get(api_url)
    if response.status_code == 200:
        data = response.json()
        # Save data to a JSON file
        with open('ticker_data.json', 'w') as file:
            json.dump(data, file)
        return HttpResponse("Data Logged Sucessfully !!")
    return HttpResponse("Cant Log Data ! Error >" , response)


@api_view(['GET', 'POST'])
def get_coin_ticker_data(request):
    coin_data = []
    CoinData.objects.all().delete()
    
    # Load data from the JSON file
    with open('ticker_data.json', 'r') as file:
        data = json.load(file)
        coin_data.extend(data)

    # Save data to the database
    for entity in coin_data:
        if entity.get('rank') is None:
            continue
        obj = CoinData(
            Rank = entity['rank'],
            CoinID=entity["id"],
            Symbol=entity["symbol"],
            Name=entity["name"],
            Price=entity['quotes']['USD']['ath_price'],
            Volume=entity['quotes']['USD']['volume_24h'],
            PercentChange=entity['quotes']['USD']['percent_change_24h']
        )
        obj.save()

    # Perform pagination
    queryset = CoinData.objects.all().values()
    paginator = Paginator(queryset, 50)  # Pagination with 50 items per page
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)

    # Serialize paginated data
    serializer = CoinDataSerializer(page_obj, many=True)  # Assuming you have a serializer named CoinDataSerializer

    return Response(serializer.data)
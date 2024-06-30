import requests
import os
import json
from time import sleep
from datetime import datetime, timedelta
from django.http import HttpResponse
from fetchforeignapi.models import CoinData
from rest_framework.response import Response # type: ignore
from rest_framework.decorators import api_view # type: ignore

# Get today's date
current_date = datetime.now()
# Calculate the date two weeks earlier
two_weeks_earlier = current_date - timedelta(weeks=2)
# Format the date as 'yyyy-mm-dd'
formatted_date = two_weeks_earlier.strftime('%Y-%m-%d')

@api_view(['GET','POST'])
def get_popular_coins(req):
    with open('popular_data.json', 'r') as file:
        data = json.load(file)
    return Response(data)


@api_view(['GET', 'POST'])
def get_daily_performers(req):
    descending_queryset = CoinData.objects.exclude(Price=0.0).order_by('PercentChange').values()
    ascending_queryset = CoinData.objects.exclude(Price=0.0).order_by('-PercentChange').values()
    top_gainers = ascending_queryset[:50]
    top_loosers = descending_queryset[:50]
    resp = {
        "top_gainers" : top_gainers,
        "top_loosers" : top_loosers,
    }
    sleep(1)
    return Response(resp)

def get_coin_stats(coinID):
    api_url = f"https://api.coinpaprika.com/v1/coins/{coinID}"
    resp = requests.get(api_url)
    if resp.status_code == 200:
        data = resp.json()
        stats = {
            "coinID": data['id'],
            "name": data['name'],
            "symbol": data['symbol'],
            "rank": data['rank'],
            "logo": data['logo'],
        }
        return stats
    else:
        # Handle the case where the request was unsuccessful
        print("Error:", resp.status_code)
        return None

def get_ohlcv_stats(coinID):
    api_url = f"https://api.coinpaprika.com/v1/coins/{coinID}/ohlcv/today"
    resp = requests.get(api_url)
    if resp.status_code == 200:
        data = resp.json()
        if data:
            temp = data[0]
            stats = {
                'open': temp['open'],
                'high': temp['high'],
                'low': temp['low'],
                'close': temp['close'],
                'volume': temp['volume']
            }
            return stats
        else:
            # Handle the case where data is empty
            print("No data available for today.")
            return None
    else:
        # Handle the case where the request was unsuccessful
        print("Error:", resp.status_code)
        return None

def get_history_price_data(coinID):
    api_url = f"https://api.coinpaprika.com/v1/tickers/{coinID}/historical?start={formatted_date}&interval=1d"
    resp = requests.get(api_url)
    if resp.status_code == 200:
        data = resp.json()
        price_arr = [entity['price'] for entity in data]
        return price_arr
    else:
        # Handle the case where the request was unsuccessful
        print("Error:", resp.status_code)
        return None


def populate_popular_coins(req):
    if os.path.exists('popular_data.json'):
        os.remove('popular_data.json')
    rank_ordered = CoinData.objects.all()[:10].values()
    CoidID_list = [entity["CoinID"] for entity in rank_ordered]
    resp = []
    # stats_resp = get_coin_stats(CoidID_list[0])
    # ohlcv_resp = get_ohlcv_stats(CoidID_list[0])
    # hist_resp = get_history_price_data(CoidID_list[0])
    for entity in CoidID_list:
        stats_resp = get_coin_stats(entity)
        ohlcv_resp = get_ohlcv_stats(entity)
        hist_resp = get_history_price_data(entity)
        stats = {
            'stats' : stats_resp,
            'ohlcv' : ohlcv_resp,
            'hist' : hist_resp
        }
        resp.append(stats)
    with open('popular_data.json', 'w') as file:
        json.dump(resp, file)
    return HttpResponse("Populated in file")
    


        

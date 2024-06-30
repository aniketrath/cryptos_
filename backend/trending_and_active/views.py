import random
import os
import json
from django.http import HttpResponse
from django.core.serializers import serialize
from fetchforeignapi.models import CoinData
from rest_framework.response import Response # type: ignore
from rest_framework.decorators import api_view # type: ignore
from dailystats.views import get_history_price_data , get_coin_stats , get_ohlcv_stats
# Create your views here.

@api_view(['GET', 'POST'])
def populate_active_and_trending(req):
    if os.path.exists('trending_active.json'):
        os.remove('trending_active.json')
    trending = []
    active = []
    all_entries = list(CoinData.objects.all().values())
    trending_rd = random.sample(all_entries, 10)
    trending_id = [entity['CoinID'] for entity in trending_rd]
    active_rd = random.sample(all_entries, 10)
    active_id = [entity['CoinID'] for entity in active_rd]
    for entity in trending_id:
        stats_resp = get_coin_stats(entity)
        ohlcv_resp = get_ohlcv_stats(entity)
        hist_resp = get_history_price_data(entity)
        stats = {
            'stats' : stats_resp,
            'ohlcv' : ohlcv_resp,
            'hist' : hist_resp
        }
        trending.append(stats)
    for entity in active_id:
        stats_resp = get_coin_stats(entity)
        ohlcv_resp = get_ohlcv_stats(entity)
        hist_resp = get_history_price_data(entity)
        stats = {
            'stats' : stats_resp,
            'ohlcv' : ohlcv_resp,
            'hist' : hist_resp
        }
        active.append(stats)
    # random.shuffle(all_entries)
    # trending = all_entries[:50]
    # active = all_entries[52:72]
    resp = {
        "active" : active,
        "trending" : trending
    }
    with open('trending_active.json', 'w') as file:
        json.dump(resp, file)
    return HttpResponse("Populated in file")

@api_view(['GET', 'POST'])
def get_active_and_trending(req):
    with open('trending_active.json', 'r') as file:
        data = json.load(file)
    return Response(data)


@api_view(['GET', 'POST'])
def get_current_coin_stat(req):
    symbol = req.GET.get('Symbol', None)
    if symbol is None:
        return Response({'error': 'Symbol query parameter is missing'}, status=400)
    # Check if the coinID exists in your system
    coin_stat = get_coin_statistics(symbol)
    if coin_stat is None:
        return Response({'error': 'Symbol not found'}, status=500)
    return Response(coin_stat)

def get_coin_statistics(symbol):
    # coinObj = CoinData.objects.all().values()
    try:
        CoinObj = CoinData.objects.get(Symbol=symbol)
        c_id = CoinObj.CoinID
        history = get_history_price_data(c_id)
        stats = get_coin_stats(c_id)
        ohlcv = get_ohlcv_stats(c_id)
        resp = {
            "Rank": CoinObj.Rank ,
            "Logo" : stats["logo"],
            "OHLCV_high" : ohlcv['high'],
            "OHLCV_low" : ohlcv['low'],
            "CoinID": CoinObj.CoinID ,
            "Symbol": CoinObj.Symbol ,
            "Name": CoinObj.Name ,
            "Price": CoinObj.Price ,
            "Volume": CoinObj.Volume ,
            "PercentChange": CoinObj.PercentChange ,
            "History":history
        }
        return resp
    except Exception as e :
        return ("Error : " , e)
    return resp
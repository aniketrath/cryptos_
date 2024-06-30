import React, { useState, useEffect } from 'react'
import { Box, Text, Header } from '../../Components/Index'
import { PopularCards, Coins, Gainers, Loosers } from './components/index'
import { GetTopPerformers, GetCoinsList, GetPopularCoins } from './GetApiData'

const RenderPage = () => {
    const [TopGainers, setTopGainers] = useState([]);
    const [TopLoosers, setTopLoosers] = useState([]);
    const [ListData, setListData] = useState([]);
    const [PopularCoins, setPopularCoins] = useState([])

    useEffect(() => {
        const fetchDataFromApi = async () => {
            if (localStorage.getItem('access_token') === null) {
                window.location.href = '/login'
            }
            try {
                const result = await GetTopPerformers();
                const list = await GetCoinsList();
                const popular_list_resp = await GetPopularCoins()
                // console.log(result);
                setListData(list)
                setPopularCoins(popular_list_resp)
                setTopGainers(result.top_gainers)
                setTopLoosers(result.top_loosers)
            } catch (error) {
                console.error("Error fetching data in MyComponent:", error);
            }
        };
        fetchDataFromApi();
    }, []);
    return (
        <Box className="font-['ProtoMono'] text-white p-3 min-h-screen bg-gradient-to-br from-stone-900 to-black">
            <Header />
            <Box horizontal className='gap-6'>
                <Box className='backdrop-blur-xl bg-zinc-800/20 rounded-2xl 
                xl:w-[43vh] 2xl:w-[40vh] h-[88vh] px-5 py-4 gap-4
                overflow-scroll scrollbar-hide'>
                    <Text className='text-2xl'>Popular Coins :</Text>
                    {
                        PopularCoins.map((item, index) => {
                            return <PopularCards
                                data={item}
                                key={index} />;
                        })
                    }
                </Box>
                <Box className='gap-6'>
                    <Coins ListData={ListData} />
                    <Box horizontal className='gap-4'>
                        <Gainers Gainers={TopGainers} />
                        <Loosers Loosers={TopLoosers} />
                    </Box>
                </Box>

            </Box>
        </Box>
    )
}

export default RenderPage
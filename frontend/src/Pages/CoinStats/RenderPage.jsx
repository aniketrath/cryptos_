import React, { useState, useEffect } from 'react'
import { Box, Header } from '../../Components/Index'
import { AcivePanel, Trending, CurrentCard, CurrentAnalytics } from "./components/index";
import { GetTrendingActive, GetCurrentStats } from './GetApiData'
import { useLocation } from 'react-router-dom';


const RenderPage = () => {
    const location = useLocation();
    // eslint-disable-next-line
    const searchParams = new URLSearchParams(location.search);
    const [ActiveData, setActiveData] = useState([]);
    const [TrendingData, setTrendingData] = useState([]);
    const [CurrentData, setCurrentData] = useState();


    useEffect(() => {
        const SYMBOL = searchParams.get('Symbol');
        if (localStorage.getItem('access_token') === null) {
            window.location.href = '/login'
        }
        console.log('refresh' ,localStorage.getItem('refresh_token'))
        const fetchDataFromApi = async () => {
            try {
                const result = await GetTrendingActive();
                const curr_stats = await GetCurrentStats(SYMBOL)
                setCurrentData(curr_stats)
                setActiveData(result.active);
                setTrendingData(result.trending);
            } catch (error) {
                console.error("Error fetching data in MyComponent:", error);
            }
        };
        fetchDataFromApi();
    }, [searchParams]);
    // console.log(CurrentData);
    return (
        <Box className="font-['ProtoMono'] p-3 min-h-screen bg-gradient-to-br from-stone-900 to-black">
            <Header />
            <Box horizontal className='px-2 gap-8'>
                <AcivePanel
                    data={ActiveData} />
                <Box className='gap-8'>
                    <Box horizontal className='gap-8'>
                        {CurrentData && <CurrentCard data={CurrentData} />}
                        {CurrentData && <CurrentAnalytics data={CurrentData} />}
                    </Box>
                    <Trending
                        data={TrendingData} />
                </Box>
            </Box>

        </Box>

    )
}

export default RenderPage
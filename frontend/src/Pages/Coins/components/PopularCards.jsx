import React from 'react'
import { Box, Text, Image } from '../../../Components/Index'
import { useNavigate } from 'react-router-dom';

const PopularCards = ({ data }) => {
    const navigate = useNavigate();
    const handleNavigate = (symbol) => {
        navigate(`/coinstats?Symbol=${symbol}`);
        // console.log(symbol);
    };
    return (
        <Box onClick={() => handleNavigate(data.stats.symbol)} className='backdrop-blur-xl bg-zinc-800/10 rounded-2xl h-[39vh] py-4 px-6 gap-4
        hover:bg-zinc-400/10 hover:outline hover:outline-cyan-400 transition-all duration-100 ease-in-out'>
            <Box horizontal className='gap-4'>
                <Box className='h-10 w-10 rounded-full'>
                    <Image src={data.stats.logo} />
                </Box>
                <Text className='text-2xl my-auto'>{data.stats.symbol}</Text>
                <Text className='text-zinc-500 text-lg my-auto'>{data.stats.name}</Text>
            </Box>
            <Box horizontal className='gap-4'>
                <Text className='text-lg'>Price :</Text>
                <Text className='text-lg text-zinc-500'>{data.ohlcv.open.toFixed(2)}</Text>
            </Box>
            <Box horizontal className='gap-4'>
                <Text className='text-lg'>24Hr High :</Text>
                <Text className='text-lg text-zinc-500'>{data.ohlcv.high.toFixed(2)}</Text>
            </Box>
            <Box horizontal className='gap-4'>
                <Text className='text-lg'>Volume :</Text>
                <Text className='text-lg text-zinc-500'>{data.ohlcv.volume.toFixed(2)}</Text>
            </Box>
        </Box>
    )
}

export default PopularCards
import React from 'react'
import { Box, Text, Image } from '../../../Components/Index'
import { useNavigate } from 'react-router-dom';

const TrendingCard = ({ data }) => {
    const navigate = useNavigate();
    const handleNavigate = (symbol) => {
        navigate(`/coinstats?Symbol=${symbol}`);
    };
    const truncatedName = data.stats.name.length > 10 ? data.stats.name.substring(0, 9) + '...' : data.stats.name;
    return (
        <Box onClick={() => handleNavigate(data.stats.symbol)} horizontal className=' border-b-2 
        border-zinc-400/20 min-h-16 px-10
        hover:bg-zinc-600/20 hover:border-cyan-400/50 transition-all ease-in-out duration-300'>
            <Box horizontal className='gap-4 my-auto justify-center w-[30vw]'>
                <Box className='w-[5vw]'>
                    <Box className='w-8 h-8 rounded-full'>
                        <Image className='rounded-xl' src={data.stats.logo}></Image>
                    </Box>
                </Box>
                <Box horizontal className='gap-4 w-[15vw]'>
                    <Text className='text-xl'>{data.stats.symbol}</Text>
                    <Text className='text-md my-auto text-zinc-500'>{truncatedName}</Text>
                </Box>
            </Box>
            <Box className='my-auto w-[30vw]'>
                <Text className='text-xl text-center text-zinc-500'> {data.ohlcv.open.toFixed(2)} USD </Text>
            </Box>
            <Box className='my-auto w-[30vw]'>
                <Text className='text-xl text-center text-zinc-500'> {data.ohlcv.volume} </Text>
            </Box>
        </Box>
    )
}
export default TrendingCard
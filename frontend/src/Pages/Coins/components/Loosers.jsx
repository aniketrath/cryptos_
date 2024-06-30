import React from 'react'
import { ArrowSwapVertical } from 'iconsax-react';
import { Box, Text } from '../../../Components/Index';
import { useNavigate } from 'react-router-dom';

const CoinCard = ({ data }) => {
    const navigate = useNavigate();
    const handleNavigate = (symbol) => {
        navigate(`/coinstats?Symbol=${symbol}`);
    };
    const truncatedName = data.Name.length > 12 ? data.Name.substring(0, 10) + '...' : data.Name;
    return (
        <Box onClick={() => handleNavigate(data.Symbol)} horizontal className=' border-b-2 
        border-zinc-400/20 min-h-16 justify-between px-10
        hover:bg-zinc-600/20 hover:border-red-400/50 transition-all ease-in-out duration-300'>
            <Box horizontal className='gap-4 my-auto'>
                <Text className='text-xl'>{data.Symbol}</Text>
                <Text className='text-lg text-zinc-500'>{truncatedName}</Text>
            </Box>
            <Box className='my-auto'>
                <Text className='text-xl text-red-500'> {data.PercentChange} </Text>
            </Box>
        </Box>
    )

}

const Coins = ({ Loosers }) => {
    return (
        <Box className='backdrop-blur-xl bg-zinc-800/20 rounded-2xl text-white 
        2xl:h-[40vh] xl:h-[39.5vh] xl:w-[36vw] 2xl:w-[37.5vw] py-4 px-6'>
            <Text className='font-semibold text-3xl text-red-500'>top Loosers (24 Hr) :</Text>
            <Box horizontal className='justify-between bg-zinc-700/10
            py-2 mt-4 px-10
            border-t border-b border-zinc-600'>
                <Box horizontal className='gap-2 h-10'>
                    <Text className='text-xl font-semibold my-auto'>Code / Name</Text>
                    <ArrowSwapVertical className='my-auto mx-2'
                        size="20"
                        color="#d9e3f0"
                    /> </Box>
                <Box horizontal className='gap-2 h-10'>
                    <Text className='text-xl font-semibold my-auto'>Change %</Text>
                    <ArrowSwapVertical className='my-auto mx-2'
                        size="20"
                        color="#d9e3f0"
                    /> </Box>
            </Box>
            <Box className='overflow-scroll scrollbar-hide mt-1'>
                {
                    Loosers.map((item, index) => {
                        return <CoinCard
                            data={item}
                            key={index} />;
                    })
                }

            </Box>

        </Box>
    )
}

export default Coins
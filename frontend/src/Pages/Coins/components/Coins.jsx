import React from 'react'
import { ArrowSwapVertical } from 'iconsax-react';
import { Box, Text } from '../../../Components/Index'
import { useNavigate } from 'react-router-dom';

const CoinCard = ({ data }) => {
    const truncatedName = data.Name.length > 6 ? data.Name.substring(0, 5) + '...' : data.Name;
    const textColorClass = data.PercentChange > 0 ? 'text-green-400' : 'text-red-500';
    const navigate = useNavigate();
    const handleNavigate = (symbol) => {
        navigate(`/coinstats?Symbol=${symbol}`);
    };

    return (
        <Box onClick={() => handleNavigate(data.Symbol)} horizontal className=' border-b-2 
        border-zinc-400/20 min-h-16 px-10
        hover:bg-zinc-600/20 hover:border-cyan-400/50 transition-all ease-in-out duration-300'>
            <Box horizontal className='gap-4 my-auto w-[20vw] justify-center'>
                <Text className='text-xl w-[50%] text-center'>{data.Symbol}</Text>
                <Text className='text-lg w-[50%] text-zinc-500'>{truncatedName}</Text>
            </Box>
            <Box className='my-auto w-[20vw]'>
                <Text className='text-xl text-center text-zinc-500'> {data.Price}  </Text>
            </Box>
            <Box className='my-auto w-[20vw]'>
                <Text className='text-xl text-center text-zinc-500'> {data.Volume}</Text>
            </Box>
            <Box className='my-auto w-[20vw]'>
                <Text className={`text-xl text-center ${textColorClass}`}> {data.PercentChange} </Text>
            </Box>
        </Box>
    )

}

const Coins = ({ ListData }) => {
    return (
        <Box className='backdrop-blur-xl bg-zinc-800/20 rounded-2xl text-white 
        h-[45.8vh] xl:w-[72vw] 2xl:w-[76vw] py-4 px-6'>
            <Text className='font-semibold text-3xl'>Coins :</Text>
            <Box horizontal className='bg-zinc-700/10
            py-2 mt-4 px-10
            border-t border-b border-zinc-600'>
                <Box horizontal className='gap-2 h-10  w-[20vw] justify-center'>
                    <Text className='text-xl font-semibold my-auto'>COIN Code / Name</Text>
                    <ArrowSwapVertical className='my-auto mx-2'
                        size="20"
                        color="#d9e3f0"
                    /> </Box>
                <Box horizontal className='gap-2 h-10  w-[20vw] justify-center'>
                    <Text className='text-xl font-semibold my-auto'>ATH USD($)</Text>
                    <ArrowSwapVertical className='my-auto mx-2'
                        size="20"
                        color="#d9e3f0"
                    /> </Box>
                <Box horizontal className='gap-2 h-10  w-[20vw] justify-center'>
                    <Text className='text-xl font-semibold my-auto'>Volume</Text>
                    <ArrowSwapVertical className='my-auto mx-2'
                        size="20"
                        color="#d9e3f0"
                    /> </Box>
                <Box horizontal className='gap-2 h-10  w-[20vw] justify-center'>
                    <Text className='text-xl font-semibold my-auto'>Change %</Text>
                    <ArrowSwapVertical className='my-auto mx-2'
                        size="20"
                        color="#d9e3f0"
                    /> </Box>
            </Box>
            <Box className='overflow-scroll scrollbar-hide mt-1'>
                {
                    ListData.map((item, index) => {
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
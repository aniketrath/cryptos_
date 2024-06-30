import React from 'react'
import { ArrowSwapVertical } from 'iconsax-react';
import { Box, Text } from '../../../Components/Index'
import { TrendingCard } from './index'

const Trending = ({ data }) => {
    return (
        <Box className='backdrop-blur-xl bg-zinc-800/20 rounded-2xl text-white 
        h-[45.8vh] xl:w-[72vw] 2xl:w-[76vw] py-4 px-6'>
            <Text className='font-semibold text-3xl'>Trending</Text>
            <Box horizontal className='bg-zinc-700/10
            py-2 mt-4 px-10
            border-t border-b border-zinc-600'>
                <Box horizontal className='gap-2 h-10 justify-center w-[40vw]'>
                    <Text className='text-xl font-semibold my-auto'>Coin Name</Text>
                    <ArrowSwapVertical className='my-auto mx-2'
                        size="20"
                        color="#d9e3f0"
                    /> </Box>
                <Box horizontal className='gap-2 h-10 justify-center  w-[40vw]'>
                    <Text className='text-xl font-semibold my-auto'>Price</Text>
                    <ArrowSwapVertical className='my-auto mx-2'
                        size="20"
                        color="#d9e3f0"
                    /> </Box>
                <Box horizontal className='gap-2 h-10 justify-center  w-[40vw]'>
                    <Text className='text-xl font-semibold my-auto'>Volume</Text>
                    <ArrowSwapVertical className='my-auto mx-2'
                        size="20"
                        color="#d9e3f0"
                    /> </Box>
            </Box>
            <Box className='overflow-scroll scrollbar-hide mt-1'>
                {
                    data.map((item, index) => {
                        return <TrendingCard
                            data={item}
                            key={index} />;
                    })
                }

            </Box>

        </Box>
    )
}

export default Trending
import React from 'react'
import { Box, Text } from '../../../Components/Index'
import { ArrowSwapVertical } from 'iconsax-react';

const ExchangeList = () => {
    return (
        <Box horizontal className=' border-b-2 
        border-zinc-400/20 min-h-16 justify-between px-10
        hover:bg-zinc-600/20 hover:border-orange-300/50 transition-all ease-in-out duration-300'>
            <Box horizontal className='gap-4 my-auto'>
                <Text className='text-xl'>BTC</Text>
                <Text className='text-xl text-zinc-500'>Bitcoin</Text>
            </Box>
            <Box className='my-auto'>
                <Text className='text-xl text-zinc-500'> 1869.978 </Text>
            </Box>
        </Box>
    )
}


const Exchanges = () => {
    return (
        <Box className='backdrop-blur-xl bg-zinc-800/20 rounded-2xl text-white 
        2xl:h-[48vh] xl:h-[41.5vh] xl:w-[35vw] 2xl:w-[37.5vw] py-4 px-6'>
            <Text className='font-semibold text-3xl'>Exchanges  :</Text>
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
                    <Text className='text-xl font-semibold my-auto'>Volume (BTC)</Text>
                    <ArrowSwapVertical className='my-auto mx-2'
                        size="20"
                        color="#d9e3f0"
                    /> </Box>
            </Box>
            <Box className='overflow-scroll scrollbar-hide mt-1'>
                {
                    Array.from({ length: 10 }).fill(undefined).map((item, index) => {
                        return <ExchangeList key={index} />;
                    })
                }
            </Box>

        </Box>
    )
}

export default Exchanges
import React from 'react'
import { Box, Text } from '../../../Components/Index'
import { ArrowRight2 } from 'iconsax-react';

const ListItem = () => {

    return (
        <Box horizontal className='outline-none border-b-2 border-spacing-4 min-h-14 
        border-zinc-600 cursor-pointer gap-4 hover:border-cyan-400/30 hover:text-cyan-200
         transition-all ease-in-out duration-150 px-4'>
            <ArrowRight2 className='my-auto' size="20" color="#d9e3f0" variant="Outline" />
            <Text className='my-auto text-xl'>NFT Name Here</Text>
        </Box>
    )
}

const ListPanel = () => {
    return (
        <Box className='backdrop-blur-xl bg-zinc-800/20 rounded-2xl 
        xl:w-[43vh] 2xl:w-[40vh] h-[88vh] px-5 py-4 gap-4'>
            <Text className='text-3xl'>Popular NFT(s) </Text>
            <Box className='overflow-scroll scrollbar-hide gap-4 mt-1'>
                {
                    Array.from({ length: 20 }).fill(undefined).map((item, index) => {
                        return <ListItem key={index} />;
                    })
                }
            </Box>
        </Box>
    )
}

export default ListPanel
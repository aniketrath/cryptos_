import React from 'react'
import { Box, Text } from '../../../Components/Index'
import { Cards } from "./index"

const ActivePanel = ({ data }) => {
    return (
        <Box className=' backdrop-blur-xl bg-zinc-800/20 rounded-2xl xl:w-[43vh] 2xl:w-[38vh] h-[87.5vh] px-5 py-4 gap-4'>
            <Text className='text-3xl font-semibold text-white mb-2 px-2'> Active Coins</Text>
            <Box className='overflow-scroll scrollbar-hide gap-6 px-2 py-2'>
                {
                    data.map((item, index) => {
                        return <Cards
                            data={item}
                            key={index} />;
                    })
                }
            </Box>
        </Box>
    )
}

export default ActivePanel
import React, { useState, useEffect } from 'react'
import { Box, Text } from '../../../Components/Index'
import { PriceGraph } from './index'

const CurrentAnalytics = (data) => {
    const [graphData, setGrapData] = useState()
    useEffect(() => {
        setGrapData(data.data.History)
    }, [data])

    // console.log(data.data.hist);

    return (
        <Box className='backdrop-blur-xl bg-zinc-800/20 rounded-2xl text-white 
        h-[40vh] 2xl:w-[44.5vw] xl:w-[40vw] py-6 px-6'>
            <Text className='text-3xl mt-1'>Analytics</Text>
            <Box className='mt-6 -ml-8 2xl:h-96 xl:h-80'>
                <PriceGraph
                    price_list={graphData}
                    showTooltip={true}
                    showtick={true} />
            </Box>
        </Box>
    )
}

export default CurrentAnalytics
import React from 'react'
import { Box, Text } from '../../../Components/Index'

const NFTDetails = () => {
    return (
        <Box className='backdrop-blur-xl bg-zinc-800/20 rounded-2xl min-h-fit
        xl:min-w-[73vw] 2xl:min-w-[75vw] py-10 px-10'>
            <Box horizontal className='justify-between'>
                <Text className='text-3xl text-cyan-400 font-bold'>NFT Details </Text>
                <Box className='h-14 w-14 bg-white rounded-full'></Box>
            </Box>
            <Box horizontal className=' gap-16'>
                <Box className='gap-5 mt-2 min-w-[25vw]'>
                    <Box horizontal className='gap-4 justify-between'>
                        <Text className='text-2xl text-zinc-400'>Name</Text>
                        <Text className='text-2xl'>Lorem Ipsum</Text>
                    </Box>
                    <Box horizontal className='gap-4 justify-between'>
                        <Text className='text-2xl text-zinc-400'>Symbol</Text>
                        <Text className='text-2xl'>Lorem Ipsum</Text>
                    </Box>
                    <Box horizontal className='gap-4 justify-between'>
                        <Text className='text-2xl text-zinc-400'>Native Currency</Text>
                        <Text className='text-2xl'>Lorem Ipsum</Text>
                    </Box>
                    <Box horizontal className='gap-4 justify-between'>
                        <Text className='text-2xl text-zinc-400'>Market Cap (usd)</Text>
                        <Text className='text-2xl'>Lorem Ipsum</Text>
                    </Box>
                    <Box horizontal className='gap-4 justify-between'>
                        <Text className='text-2xl text-zinc-400'>Total Supply</Text>
                        <Text className='text-2xl'>Lorem Ipsum</Text>
                    </Box>
                </Box>

                <Box>
                    <Box className='gap-4'>
                        <Text className='text-2xl text-zinc-400'>Description</Text>
                        <Text className='text-2xl w-[35vw]'>
                            lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum
                            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                        </Text>
                    </Box>

                </Box>
            </Box>

        </Box>
    )
}

export default NFTDetails
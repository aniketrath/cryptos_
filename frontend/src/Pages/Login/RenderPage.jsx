import React from 'react'
import { Box, Header, Text } from '../../Components/Index'
import { LoginForm } from './components/index'


const RenderPage = () => {
    return (
        <Box className="font-['ProtoMono'] text-white p-3 min-h-screen bg-gradient-to-br from-stone-900 to-black">
            <Header />
            <Box className='mx-auto'>
                <Box className='mt-20'>
                    <Text className='mx-auto text-[5rem] text-cyan-400'>CRYPTOS</Text>
                    <Text className="text-2xl w-[40vw] mx-auto text-center">over 150,000 cryptocurrencies and NFTs to research and buy from
                        the Worlds Largest trading and analysis platform</Text>
                </Box>
                <LoginForm/>

            </Box>
        </Box>
    )
}

export default RenderPage
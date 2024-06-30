import React from 'react'
import { Box, Header } from '../../Components/Index';
import { ListPanel, NFTDetails, Exchanges, AssetMapper } from './components/index'

const RenderPage = () => {
    return (
        <Box className="font-['ProtoMono'] text-white p-3 min-h-screen bg-gradient-to-br from-stone-900 to-black">
            <Header />
            <Box horizontal className='gap-8 px-4'>
                <ListPanel />
                <Box className='gap-4'>
                    <NFTDetails />
                    <Box horizontal className='gap-8'>
                        <Exchanges />
                        <AssetMapper />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default RenderPage
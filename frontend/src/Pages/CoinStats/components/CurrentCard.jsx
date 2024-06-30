import React, { useEffect, useState } from 'react'
import { Box, Text, Button, Image } from '../../../Components/Index'
import { UsdCoin, FolderFavorite } from 'iconsax-react';

const CurrentCard = ({ data }) => {
    const [markFav, setMarkFav] = useState(true)
    const [coinData, setCoinData] = useState({
        coinname: '',
        rank: 0,
        price: 0,
        symbol: '',
        high: 0,
        low: 0,
        volume: 0,
        logo: ''
    });
    useEffect(() => {
        if (data) {
            setCoinData({
                logo: data.Logo,
                coinname: data.Name,
                rank: data.Rank,
                price: data.Price.toFixed(4),
                symbol: data.Symbol,
                high: data.OHLCV_high.toFixed(4),
                low: data.OHLCV_low.toFixed(4),
                volume: data.Volume.toFixed(4)
            });
        }
    }, [data]);
    const truncatedName = coinData.coinname.length > 10 ? coinData.coinname.substring(0, 9) : coinData.coinname
    return (
        <Box className='backdrop-blur-xl bg-zinc-800/20 rounded-2xl text-white 
        h-[40vh] w-[30vw] py-6 px-6'>
            <Box horizontal className='justify-between'>
                <Box horizontal className='gap-4'>
                    <Box className='w-14 h-12 rounded-full p-1.5 -mx-1'>
                        <Image className='rounded-full' src={coinData.logo}></Image>
                    </Box>
                    <Text className='my-auto text-3xl'>{coinData.symbol}</Text>

                </Box>
                <Box horizontal className='gap-4'>
                    {
                        markFav ?
                            <Button>
                                <FolderFavorite onClick={() => setMarkFav(prevMarkFav => !prevMarkFav)}
                                    className='2xl:-mt-1' size="32" color="#d9e3f0" variant="TwoTone" />
                            </Button>
                            : <Button>
                                <FolderFavorite onClick={() => setMarkFav(prevMarkFav => !prevMarkFav)}
                                    className='2xl:-mt-1' size="32" color="#d9e3f0" variant="Bold" />
                            </Button>
                    }
                    <Text className='text-zinc-600 text-[2rem]'>#{coinData.rank}</Text>
                </Box>
            </Box>
            <Text className='my-auto text-3xl text-zinc-600 ml-16'>{truncatedName}</Text>
            <Box horizontal className='gap-4 py-2'>
                <UsdCoin className='mt-1 ml-1' size="42" color="#FFC300" />
                <Text className='2xl:text-4xl text-2xl my-auto font-semibold'> : {coinData.price} USD</Text>
            </Box>
            <Box horizontal className='gap-4 py-2 text-zinc-600 px-2 xl:-mt-2 2xl:mt-0'>
                <Text className='2xl:text-2xl text-xl my-auto font-semibold'>24Hr High :</Text>
                <Text className='2xl:text-2xl text-xl my-auto font-semibold'>{coinData.high} USD</Text>
            </Box>
            <Box horizontal className='gap-4 py-2 text-zinc-600 px-2 xl:-mt-2 2xl:mt-0'>
                <Text className='2xl:text-2xl text-xl my-auto font-semibold'>24Hr Low :</Text>
                <Text className='2xl:text-2xl text-xl my-auto font-semibold'>{coinData.low} USD</Text>
            </Box>
            <Box horizontal className='gap-4 py-2 text-zinc-600 px-2 xl:-mt-2 2xl:mt-0'>
                <Text className='2xl:text-2xl text-xl my-auto font-semibold'>Trade Volume :</Text>
                <Text className='2xl:text-2xl text-xl my-auto font-semibold'>{coinData.volume}</Text>
            </Box>
            <Box horizontal className='px-1 mt-1 2xl:mt-7 gap-4'>
                <Button className='outline-none border-2 py-2 2xl:py-2 2xl:w-64 w-56 rounded-xl 
                2xl:h-18 xl:h-12 
        bg-cyan-400 text-black font-bold 2xl:text-2xl xl:text-xl transition-all ease-in-out duration-150 border-cyan-400'>Buy</Button>
                <Button className='outline-none border-2 py-2 2xl:py-2 2xl:w-64 w-56 rounded-xl 
                2xl:h-18 xl:h-12
        text-white 2xl:text-2xl xl:text-xl font-bold transition-all ease-in-out duration-150 border-cyan-400'>Sell</Button>
            </Box>
        </Box>
    )
}

export default CurrentCard
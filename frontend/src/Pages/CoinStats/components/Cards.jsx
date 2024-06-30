import React, { useState, useEffect } from 'react'
import { Box, Text, Image } from '../../../Components/Index'
import { PriceGraph } from './index'
import { useNavigate } from 'react-router-dom';


const Cards = ({ data }) => {
  const navigate = useNavigate();
  const handleNavigate = (symbol) => {
    navigate(`/coinstats?Symbol=${symbol}`);
  };
  const [graphData, setGrapData] = useState()
  useEffect(() => {
    setGrapData(data.hist)
  }, [data])
  // console.log(graphData);
  return (
    <Box onClick={() => handleNavigate(data.stats.symbol)} className='bg-transparent outline-none gap-3 
    text-white border-2 border-zinc-800 hover:border-cyan-400 
    transition-all duration-300 ease-in-out rounded-2xl min-h-52 p-4'>
      <Box horizontal className='justify-between'>
        <Box horizontal className='gap-2'>
          <Box className='h-7 w-7 rounded-full'>
            <Image className='rounded-full' src={data.stats.logo}></Image>
          </Box>
          <Text className='text-lg'>{data.stats.symbol}</Text>
          <Text className='text-lg text-stone-500'>{data.stats.name}</Text>
        </Box>
        <Box>
          <Text className='font-medium'>{data.stats.rank}</Text>
        </Box>
      </Box>
      <Box>
        <Text>Price : {data.ohlcv.open.toFixed(5)}</Text>
        <Text>Volume 24Hr : {data.ohlcv.volume}</Text>
      </Box>

      <Box className='-ml-16 min-h-[10vh]'>
        <PriceGraph
          price_list={graphData}
          height={100} />
      </Box>
    </Box>
  )
}

export default Cards
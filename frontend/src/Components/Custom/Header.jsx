import React, { useState, useEffect } from 'react'
import { Box, Button } from '../Index'
import { Logout } from 'iconsax-react';

const Header = () => {
    const [LoginStat, SetLoginStat] = useState("")
    useEffect(() => {
        const uname = localStorage.getItem('username');
        if (uname === null) {
            SetLoginStat("Log In")
        }
        else {
            SetLoginStat(uname)
        }
    }, []);

    return (
        <Box horizontal className=' justify-between px-2 h-12 mt-2 mb-4 my-auto'>
            <Box horizontal className='gap-6 mt-1.5'>
                <Button className='text-cyan-400 font-bold cursor-pointer text-lg mr-6 h-4
                hover:text-2xl transition-all ease-in-out duration-150'>Cryptos</Button>
                <Button onClick={() => window.location.href = '/'} className='text-lg font-semibold cursor-pointer text-white h-4
                hover:text-cyan-200 transition-all ease-in-out duration-100'>Currencies</Button>
                {/* <Button className='text-lg font-semibold cursor-pointer text-white h-4
                hover:text-cyan-200 transition-all ease-in-out duration-100'>Cryptos_:NFT</Button> */}
            </Box>
            <Box horizontal className='gap-6'>
                <Button  className='text-lg font-semibold cursor-pointer text-white h-6 mt-1.5
                hover:text-cyan-200 transition-all ease-in-out duration-100'>{LoginStat}</Button>
                <Button className='-mt-2' onClick={() =>  window.location.href = '/logout'}>
                    <Logout size="36" color="#d9e3f0"/>
                </Button>
            </Box>
        </Box>
    )
}

export default Header
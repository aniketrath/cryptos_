/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { Box, Text, Button } from '../../../Components/Index'
import axios from 'axios'

const LoginForm = () => {
    const [username, SetUsername] = useState('')
    const [password, SetPassword] = useState('')
    const submit = async e => {
        e.preventDefault();

        const user = {
            username: username,
            password: password
        };
        const { data } = await axios.post(
            `${process.env.REACT_APP_API_URL}/token/`,
            user,
            {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            }
        );

        // Initialize the access & refresh token in localstorage.      
        localStorage.clear();
        localStorage.setItem('access_token', data.access);
        localStorage.setItem('refresh_token', data.refresh);
        localStorage.setItem('username', username)
        axios.defaults.headers.common['Authorization'] =
            `Bearer ${data['access']}`;
        window.location.href = '/'
    }

    return (
        <Box className=' items-center mt-8'>
            <Box className='items-center bg-gray-100/10 py-10 px-10 rounded-xl'>
                <Text className='text-3xl'>Login</Text>
                <form onSubmit={submit} 
                className='flex flex-col mt-5 w-[23vw]'>
                    <div className="relative h-11 w-full ">
                        <input placeholder=""
                            type='text'
                            value={username}
                            onChange={e => SetUsername(e.target.value)}
                            className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-lg font-normal 
                        text-gray-700  transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 
                        focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100" />
                        <label
                            className="after:content[''] -mt-2 pointer-events-none absolute left-0 -top-1.5 flex h-full w-full s
                        elect-none !overflow-visible truncate text-xl font-normal leading-tight text-gray-500 
                        transition-all after:absolute after:-bottom-1.5 after:block after:w-full 
                        after:scale-x-0 
                        after:transition-transform after:duration-300 peer-placeholder-shown:text-lg peer-placeholder-shown:leading-[4.25] 
                        peer-placeholder-shown:text-blue-gray-500 peer-focus:text-lg peer-focus:leading-tight peer-focus:text-gray-300 
                        peer-focus:after:scale-x-100 peer-disabled:text-transparent 
                        peer-disabled:peer-placeholder-shown:text-gray-500">
                            Username
                        </label>
                    </div>

                    <div className="relative h-11 w-full min-w-[200px] mt-8">
                        <input placeholder=""
                            type='password'
                            value={password}
                            onChange={e => SetPassword(e.target.value)}
                            className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-lg font-normal 
                        text-gray-700  transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 
                        focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100" />
                        <label
                            className="after:content[''] -mt-2 pointer-events-none absolute left-0 -top-1.5 flex h-full w-full s
                        elect-none !overflow-visible truncate text-xl font-normal leading-tight text-gray-500 
                        transition-all after:absolute after:-bottom-1.5 after:block after:w-full 
                        after:scale-x-0 
                        after:transition-transform after:duration-300 peer-placeholder-shown:text-lg peer-placeholder-shown:leading-[4.25] 
                        peer-placeholder-shown:text-blue-gray-500 peer-focus:text-lg peer-focus:leading-tight peer-focus:text-gray-300 
                        peer-focus:after:scale-x-100 peer-disabled:text-transparent 
                        peer-disabled:peer-placeholder-shown:text-gray-500">
                            Password
                        </label>
                    </div>

                    <div className="flex items-center justify-between mt-6">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                            </div>
                            <div className="ml-3 textlg">
                                <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                            </div>
                        </div>
                        <a href="#" className="text-lg font-medium text-primary-600 hover:text-cyan-200">Forgot password?</a>
                    </div>
                    <Button className='bg-cyan-400/75 text-xl text-black font-semibold mt-6 h-10' >Submit</Button>
                </form>
            </Box>
        </Box>
    )
}

export default LoginForm
import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

const Login = () => {

    return (
        <>
            <div className="flex h-screen justify-center bg-gray-200 items-center">
                <div className="w-full md:w-3/6 flex flex-col md:flex-row h-auto md:h-[600px] bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="left flex p-8 md:p-16 flex-col gap-10 w-full md:w-1/2 bg-gradient-to-b from-purple-600 to-purple-500 text-white">
                        <h1 className='text-5xl md:text-8xl font-bold'>Hello World.</h1>
                        <p className='text-sm md:text-base'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum, alias totam numquam ipsa exercitationem dignissimos, error nam, consequatur.
                        </p>
                        <span className='text-xs md:text-sm'>Don't you have an account?</span>
                        <Link to="/Register">
                            <button className='bg-gray-100 text-purple-800 px-8 py-2 rounded-md font-semibold transition-transform transform hover:scale-105'>Register</button>
                        </Link>
                    </div>
                    <div className="p-8 md:p-16 w-full md:w-1/2 flex flex-col gap-12 justify-center bg-gray-50">
                        <h1 className='font-semibold text-3xl text-gray-800'>Login</h1>
                        
                        <form>
                            <div className="flex flex-col gap-3">
                                <input
                                    type="text"
                                    placeholder="Username"
                                    className="rounded-md p-2 outline-none w-full"
                                />
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="rounded-md p-2 outline-none w-full" 
                                />
                            </div>
                           <button className='bg-purple-500 px-10 py-2 rounded-md mt-5 text-white font-semibold'>Login</button> 
                        </form>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Login

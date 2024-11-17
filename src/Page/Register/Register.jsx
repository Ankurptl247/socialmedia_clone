import React from 'react'
import "./Register.css"
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <>
      <div className="flex h-screen justify-center bg-gray-200 items-center">
        <div className="w-full md:w-3/6 flex flex-col md:flex-row h-auto md:h-[600px] bg-white rounded-lg shadow-lg overflow-hidden">

          <div className="p-8 md:p-16 w-full md:w-1/2 flex flex-col gap-6 justify-center bg-gray-50">
            <h1 className='font-semibold text-3xl text-gray-800 mb-8'>Register</h1>
            <form>
              <div className="flex flex-col gap-6">
                <input
                  type="text"
                  id="username"
                  placeholder="Username"
                  className="border-b border-gray-400 focus:border-indigo-600 focus:outline-none p-3 w-full"
                />
                <input
                  type="text"
                  id="name"
                  placeholder="Full Name"
                  className="border-b border-gray-400 focus:border-indigo-600 focus:outline-none p-3 w-full"
                />
                <input
                  type="email"
                  id="email"
                  placeholder="Email Address"
                  className="border-b border-gray-400 focus:border-indigo-600 focus:outline-none p-3 w-full"
                />
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  className="border-b border-gray-400 focus:border-indigo-600 focus:outline-none p-3 w-full"
                />
              </div>
              <button className='bg-purple-500 px-10 py-2 rounded-md mt-5 text-white font-semibold'>Register</button>
            </form>
          </div>

          {/* Right Section (Welcome Message) */}
          <div className="right flex p-8 md:p-16 flex-col gap-10 w-full md:w-1/2 bg-gradient-to-b from-purple-600 to-purple-500 text-white">
            <h1 className='text-5xl md:text-6xl font-bold'>Welcome.</h1>
            <p className='text-sm md:text-base'>
              Create your account to start using our services. It's quick and easy!
            </p>
            <span className='text-xs md:text-sm'>Already have an account?</span>
            <Link to="/Login">
              <button className='bg-gray-100 text-purple-800 px-8 py-2 rounded-md font-semibold transition-transform transform hover:scale-105'>Login</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register

import React from 'react'
import { sidebarItems, sidebarOthers, sidebarShortCut } from '../../constant'

const LeftBar = () => {

  return (
    <>
      <div className='bg-gray-40 p-5 sticky left-0 z-40 bg-zinc-100'>
        <div className='flex-col flex gap-1'>
          <div className='user flex items-center m-2 gap-3'>
            <img className='rounded-[50%] h-10 w-10 bg-zinc-600' src="" alt="" />
            <span>Ankur Patel</span>
          </div>
          <div className=''>
            {sidebarItems.map((item) => (
              <div className='flex justify-items-start items-start gap-3 m-3' key={item.id}>
                <img className='h-7' src={item.icon} alt="" />
                <span>{item.name}</span>
              </div>
            ))}
          </div>
          <div className=''>
            <p className='text-sm font-bold justify-start flex items-center m-3'>Your Shortcuts</p>
            {sidebarShortCut.map((item) => (
              <div className='flex items-center gap-3 m-3' key={item.id}>
                <img className='h-7' src={item.icon} alt="" />
                <span>{item.name}</span>
              </div>
            ))}
          </div>
          <div className=''>
            <p className='text-sm font-bold justify-start flex items-center m-3'>Others</p>
            {sidebarOthers.map((item) => (
              <div className='flex items-center gap-3 m-3' key={item.id}>
                <img className='h-7' src={item.icon} alt="" />
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </>
  )
}

export default LeftBar

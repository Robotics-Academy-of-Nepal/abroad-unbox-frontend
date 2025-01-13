import React from 'react'
import Sidebar from './Sidebar'

const Sat = () => {
  return (
    <div className='w-full flex'>
        <div className='w-[35%] md:w-[20%]'>
            <Sidebar/>
        </div>
        <div className='w-[70%] md:w-[80%]'>
            contents
        </div>
    </div>
  )
}

export default Sat
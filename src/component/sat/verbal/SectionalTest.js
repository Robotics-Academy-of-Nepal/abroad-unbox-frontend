import React from 'react'
import Sidebar from '../Sidebar'

const SectionalTest = () => {
  return (
    <div className='w-full flex'>
        <div className='w-[35%] md:w-[20%]'>
            <Sidebar/>
        </div>
        <div className='w-[70%] md:w-[80%]'>
            Sectional Test
        </div>
    </div>
  )
}

export default SectionalTest
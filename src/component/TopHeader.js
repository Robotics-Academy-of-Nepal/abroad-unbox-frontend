import React from 'react'
import { Link } from 'react-router-dom'

const TopHeader = () => {
  return (
    <div className='w-full flex justify-between md:p-5 pt-3 px-4 mx-auto'>
        <div>
        <Link to="/">
            <h1 style={{fontFamily: "Poppins, sans-serif",color: "#020346",}} className="font-semibold text-lg md:text-xl">
                Ab-Un
            </h1>
        </Link>
        </div>
        <div>
        <h1 style={{fontFamily: "Poppins, sans-serif",color: "#020346",}} className="font-semibold text-lg md:text-xl">
            <Link to="/login">Login</Link>
        </h1>
        </div>
    </div>
  )
}

export default TopHeader
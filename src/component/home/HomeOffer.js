import React from 'react'
import { FaBookReader } from "react-icons/fa";
import { LuNotebookPen } from "react-icons/lu";
import { RiFileCopy2Line } from "react-icons/ri";
import { Link } from 'react-router-dom';

const HomeOffer = () => {
  return (
    <div>
        <h1 className='text-blue-950 text-3xl text-center font-bold my-4'>What we offer?</h1>
        <div className='flex flex-col md:flex-row lg:flex-row lg:justify-around md:justify-around justify-center items-center my-6 container mx-auto'>
            <div className='p-6 shadow shadow-gray-200 rounded-lg mb-5 text-blue-950 bg-gray-200 md:w-[20%] w-[90%]'>
                <div className='text-center'>
                    <RiFileCopy2Line className='text-2xl mx-auto font-bold cursor-default' />
                    <Link to="/sat/reading" className='cursor-Link to="/sat/reading"ointer text-lg md:text-xl font-semibold'>SAT</Link>
                    <p className='text-justify text-gray-900 text-lg'>The SAT (Scholastic Assessment Test) is a standardized test widely used for college admissions, primarily in the United States. It measures students' readiness for college and provides colleges with a common data point to compare applicants.</p>
                </div>
            </div>
            <div className='p-6 shadow shadow-gray-200 rounded-lg mb-5 text-blue-950 bg-gray-200 md:w-[20%] w-[90%]'>
                <div className='text-center'>
                    <LuNotebookPen className='text-2xl mx-auto font-bold' />
                    <Link to="/essaywriting" className='cursor-pointer text-lg md:text-xl font-semibold'>Essay Writing</Link>
                    <p className='text-justify text-gray-900 text-lg'>Essay writing involves organizing thoughts and ideas into a coherent structure to effectively communicate a message or argument. It typically includes an introduction, body paragraphs, and a conclusion, each serving and supporting the main idea.</p>
                </div>
            </div>
            <div className='p-6 shadow shadow-gray-200 rounded-lg mb-5 text-blue-950 bg-gray-200 md:w-[20%] w-[90%]'>
                <div className='text-center'>
                    <FaBookReader className='text-2xl mx-auto font-bold' />
                    <Link to="/info" className='cursor-pointer text-lg md:text-xl font-semibold'>Reading</Link>
                    <p className='text-justify text-gray-900 text-lg cursor-default'>Reading is the process of interpreting and understanding written text to gain knowledge, insights, or enjoyment. It helps develop critical thinking, expand vocabulary, and foster creativity by exposing readers to diverse perspectives and ideas.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeOffer
import React, { useState } from 'react'

const StudentDetails = () => {
const [docsStatus, setDocsStatus]= useState(true);
  return (
    <div className='w-full mx-auto flex flex-col md:flex-row'>
        {/* student details section */}
        <div className='w-full md:w-[55%] text-xl text-gray-900 border-r-4 border-[#020346] shadow-md shadow-black p-6'>
            <h1 className='text-left font-semibold text-2xl'>Student Bio:</h1>
            {/* photo and details section */}
            <div className='flex flex-col md:flex-row gap-6'>
                <div>
                    <img src='' alt="user image" />
                </div>
                <div>
                    <ul>
                        <li>Name:</li>
                        <li>Garde passed:</li>
                        <li>GPA/Percentage</li>
                        <li>Passout Year</li>
                    </ul>
                </div>
            </div>
            {/* work exp */}
            <ul>
                <li className='my-2'>Work Experience: </li>
                <li className='my-2'>Projects/Research Paper: </li>
                <li className='my-2'>University Finalizer: </li>
                <li className='my-2'>Special notes: </li>
            </ul>
        </div>
        {/* updated documents */}
        <div className='w-full md:w-[45%] text-xl shadow-inner shadow-gray-700'>
            <div className='shadow-inner shadow-gray-700 p-6 mx-auto '>
                Documents Uploaded:
            </div>
            {/* document status */}
            {docsStatus &&(
                <div className=' p-6 mx-auto '>
                    <p>Status: <span className='text-green-700'>Completed</span></p>
                    <p>SAT: </p>
                    <p>Verbal: </p>
                    <p>Quant: </p>
                </div>
            )}
        </div>
    </div>
  )
}

export default StudentDetails
import React, { useState } from 'react'

const EssayBody = () => {
const [isAdmin, setIsAdmin]= useState(true);
  return (
    <div>
        <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Info</h1>

        <div className="flex flex-col md:flex-row gap-6">
            {/* Video Container */}
            <div className="w-full md:w-1/2">
                <video
                    className="w-full h-64 md:h-full"
                    controls
                    preload="metadata"
                >
                <source src='' type="video/mp4" />
            </video>
            </div>

            {/* Article Container */}
            <div className="w-full md:w-1/2 p-4 border-b-slate-200 shadow-inner shadow-gray-200">
                Presentation slides container
            </div>
        </div>
        {/* description section */}
        <div className='my-3 text-justify'>
        <h2 className="text-lg font-semibold">Description:</h2>
            <p className="mb-4">
                Taken by students everywhere for U.S. college admissions. It is
                used to assess student competence and college readiness in critical
                reading, writing, and math.
            </p>

            <h2 className="text-lg font-semibold">About:</h2>
            <p className="mb-4">
                The SAT is an exam run by the College Board and taken by students
                everywhere for U.S. college admissions. 
            </p>
        </div>
            {/* Admin Controls */}
            {isAdmin && (
                    <div className="flex gap-4 mt-4">
                    <button className="text-blue-600 underline">Edit Content</button>
                    <button className="text-red-600 underline">Delete Content</button>
                    </div>
            )}
        </div>
    </div>
  )
}

export default EssayBody
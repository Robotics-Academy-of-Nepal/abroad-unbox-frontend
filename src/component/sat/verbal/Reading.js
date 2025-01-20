import React, { useState } from 'react';
import Sidebar from "../Sidebar";
import satimg from "../image/sat.jpg";

const Reading = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <div className="w-full flex bg-gray-100">
      {/* Sidebar */}
      <div className="w-[35%] md:w-[20%]">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="w-[70%] md:w-[80%]">
        <div className="w-full flex flex-col-reverse md:flex-row gap-4">
          {/* About SAT */}
          <div className="flex-1 p-4 text-gray-900 text-justify">
            <div className="text-xl md:text-2xl font-bold mb-2">
              ABOUT SAT
            </div>
            {/* SAT Description */}
            <div className="text-lg md:text-xl items-center justify-center ">
              The SAT (Scholastic Assessment Test) is a standardized test widely used for college admissions in the United States. It is designed to assess a student's readiness for college by evaluating their skills in areas such as reading, writing, and mathematics.
              The test consists of three main sections:
            <ul className='pl-6 hidden md:block'>
            <li className='list-disc'>
                <span className='font-semibold'>Reading:</span> Measures the ability to understand and interpret written passages, analyzing vocabulary in context, and identifying main ideas and supporting details.
            </li>
            <li className='list-disc'>
                <span className='font-semibold'>Writing and Language:</span> Tests grammar and usage, punctuation, sentence structure, and rhetorical skills by asking students to identify and correct errors in passages.
            </li>
            <li className='list-disc'>
                <span className='font-semibold'>Mathematics:</span> Includes questions on arithmetic, algebra, geometry, and data analysis. It is divided into two sections: one that allows a calculator and one that does not.
            </li>
            </ul>
            </div>
          </div>

          {/* SAT Image */}
          <div className="flex-1">
            <img
              src={satimg}
              alt="SAT"
              className="w-full h-auto object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reading;

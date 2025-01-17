import React from 'react'

const QuizVerbal = () => {
  return (
    <div className='p-6 w-full'>
        <h2 className='text-lg lg:text-xl text-black cursor-default font-bold'>Quiz Section</h2>
        <div>
            <h2 className='text-lg text-black text-justify'>Question here</h2>
            <ul>
                <li><input type='radio' /> option one</li>
                <li><input type='radio' /> option two</li>
                <li><input type='radio' /> option three</li>
                <li><input type='radio' /> option four</li>
            </ul>
        </div>
    </div>
  )
}

export default QuizVerbal
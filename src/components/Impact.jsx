import React from 'react'

const Impact = () => {
  return (
    <div className='flex text-brand flex-col md:flex-row items-center p-4 gap-4'>
        <div className="flex border rounded-lg border-secondary shadow flex-col items-start w-[90%] md:w-[30%] p-12 ">
            <h3 className="text-3xl font-bold">Primary School</h3>
            <p className="text-lg">Grade 1 - 6. Math, English, Science and other subjects.</p>
        </div>
        <div className="flex border rounded-lg border-secondary shadow flex-col items-start w-[90%] md:w-[30%] p-12 ">
            <h3 className="text-3xl font-bold">Secondary School</h3>
            <p className="text-lg">Grade 6 - 12. Math, English, Physics, Chemistry, and more. </p>
        </div>
        <div className="flex border rounded-lg border-secondary shadow flex-col items-start w-[90%] md:w-[30%] p-12 ">
            <h3 className="text-3xl font-bold">Exam Preparation</h3>
            <p className="text-lg">Common Entrance, BECE, WAEC, JAMB, etc.</p>
        </div>
        <div className="flex border rounded-lg border-secondary shadow flex-col items-start w-[90%] md:w-[30%] p-12 ">
            <h3 className="text-3xl font-bold">Preparing with Thrivetop</h3>
            <p className="text-lg">IELTS, SATs, GMAT etc.</p>
        </div>
    </div>
  )
}

export default Impact
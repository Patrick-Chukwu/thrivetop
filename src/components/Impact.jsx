import React from 'react'

const Impact = () => {
  return (
    <div className='flex text-brand flex-col md:flex-row items-center p-4 gap-4'>
        <div className="flex border rounded-lg border-secondary shadow flex-col items-center w-[90%] md:w-[30%] ">
            <h3 className="text-3xl font-bold">GCSE</h3>
            <p className="text-xl">EDEXCEL, AQA, OCR etc.</p>
        </div>
        <div className="flex border rounded-lg border-secondary shadow flex-col items-center w-[90%] md:w-[30%] ">
            <h3 className="text-3xl font-bold">IGCSE</h3>
            <p className="text-xl"></p>
        </div>
    </div>
  )
}

export default Impact
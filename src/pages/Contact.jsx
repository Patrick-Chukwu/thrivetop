import React from 'react'
import Navbar from '../components/Navbar'
import contact from '../assets/contact.webp'

const Contact = () => {
  return (
    <div className='mt-20'>
    <Navbar/>

    <section className="flex flex-col md:flex-row-reverse ">
      <img src={contact} alt="" className='w-full h-32'/>

    </section>
        <section className="flex flex-col p-4 gap-4 max-w-3xl mx-auto">
            <h2 className='text-center font-semibold text-3xl'>For fees payment:</h2>
            <div className="flex flex-col gap-4">
              <div className="flex justify-between">
                <p className="font-bold">Bank: </p> <p className="font-medium">Ecobank</p>
              </div>
              <div className="flex justify-between">
                <p className="font-bold">Account Name: </p> <p className="font-medium">Thrivetop Academy Ltd.</p>
              </div>
              <div className="flex justify-between">
                <p className="font-bold">Account Number: </p> <p className="font-medium">3880120663</p>
              </div>
            </div>

        </section>
    </div>
  )
}

export default Contact
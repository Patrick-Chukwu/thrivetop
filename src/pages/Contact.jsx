import React from 'react'
import Navbar from '../components/Navbar'
import contact from '../assets/contact.webp'
import Footer from '../components/Footer'
import { MdCall } from 'react-icons/md'
import { FaLocationArrow } from 'react-icons/fa6'
import { HiLocationMarker } from 'react-icons/hi'

const Contact = () => {
  return (
    <div className='mt-20'>
    <Navbar/>

    <section className="flex flex-col md:flex-row-reverse bg-primary text-white justify-center items-center md:justify-between">
      <img src={contact} alt="" className='w-full h-32 md:h-64 md:w-1/2'/>
      <div className="flex gap-3 p-2 py-6 flex-col">
      <h2 className="text-2xl md:text-4xl text-white  text-center font-bold">Get in touch</h2>
      <p className="px-4 text-base">Want to get in touch? We'd love to hear from you. Here's how you can reach us.</p>

      </div>

    </section>
    <section className="flex flex-col md:flex-row gap-8 p-10 items-center justify-center">
      <div className="flex flex-col gap-4 border border-primary  p-10 justify-center items-center shadow-md">
        <MdCall className='size-10'/>
        <p className='text-xl font-semibold'>Talk to Sales </p>
        <p className='md:max-w-md'>Interested in our services? Call or chat with us.</p>
        <p className="text-secondary underline text-xl">+2347044822539</p>
      </div>
      <div className="flex flex-col gap-4 border border-primary  p-10 justify-center items-center shadow-md">
        <HiLocationMarker className='size-10'/>
        <p className='text-xl font-semibold'>Head Office </p>
        <p className='md:max-w-md'>Interested in checking us out? Come to our location.</p>
        <p className="text-secondary underline text-xl">26, Oluyole, Ibadan 110115, Oyo</p>
      </div>
    </section>
        <section className="flex flex-col p-4 gap-4 max-w-3xl mx-auto">
            <h2 className='text-center font-semibold text-3xl text-primary'>For fees payment:</h2>
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

        <Footer/>
    </div>
  )
}

export default Contact
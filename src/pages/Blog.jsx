import React from 'react'
import Navbar from '../components/Navbar'
import frontend from '../assets/stocks/FRONTEND-TECHNOLOGIES.jpg'
import blockchain from '../assets/stocks/blockchain.webp'
import ikere from '../assets/stocks/ikeretech.webp'
import Footer from '../components/Footer'
import TestimonialSection from '../components/TestimonialSection'


const Blog = () => {
  return (
    <div className='mt-24'>
      <Navbar/>
      <h3 className="text-2xl text-primary md:text-4xl font-medium text-left w-[98%] md:max-w-[710px] mx-auto">Become a tutor and earn money teaching what you love</h3>
      <p className="text-base text-brand md:text-4xl font-medium text-left w-[98%] md:max-w-[710px] mx-auto">With Thrivetop Academy, you can teach students online and fit lessons into your schedule. Simply register, deliver great lessons and get paid. It's that easy.</p>
      <div className="">
            
    <TestimonialSection/>
      </div>
      <Footer/>
      </div>
  )
}

export default Blog
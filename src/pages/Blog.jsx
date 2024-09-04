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
      <h3 className="text-2xl text-primary md:text-4xl font-medium text-center w-[98%] md:max-w-[710px] mx-auto">Thrivetop offers top tutors to help your child thrive academically</h3>
      <div className="">
            
    <TestimonialSection/>
      </div>
      <Footer/>
      </div>
  )
}

export default Blog
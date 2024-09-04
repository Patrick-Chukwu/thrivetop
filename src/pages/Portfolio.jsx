import React from 'react'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import Footer from '../components/Footer'
import Impact from '../components/Impact'

const Portfolio = () => {
  return (
    <div className='mt-24'>
      <Navbar/>
      <h2 className="text-2xl md:text-4xl text-primary  text-center font-bold">Unlock your Child's potential with our courses</h2>
      <p className='text-brand text-base p-4 text-left w-fit mx-auto'>We provide quality and affordable learning to help your child thrive academically and in other aspects of life. Explore our list of curated sessions to help your child unlock any goal with ease. Our <span className="border-b-4 border-double border-primary text-secondary font-bold">top tutors</span> are here to help your child <span className="border-b-4 border-double border-primary text-secondary font-bold">thrive</span> in his/her journey of cracking any examination.</p>

      {/* <Projects/> */}
      <Impact/>
      <Footer/>
    </div>
  )
}

export default Portfolio
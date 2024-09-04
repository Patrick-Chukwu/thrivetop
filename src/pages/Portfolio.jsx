import React from 'react'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import Footer from '../components/Footer'
import Impact from '../components/Impact'

const Portfolio = () => {
  return (
    <div className='mt-24'>
      <Navbar/>
      <h2 className="text-3xl text-primary  text-center font-bold">Courses</h2>
      <p className='text-brand text-sm p-4 text-center w-fit mx-auto'>We provide quality and affordable learning to help your child <span className="border-b-4 border-double border-primary ">thrive</span> .</p>

      {/* <Projects/> */}
      <Impact/>
      <Footer/>
    </div>
  )
}

export default Portfolio
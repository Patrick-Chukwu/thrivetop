import React from 'react'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'

const Portfolio = () => {
  return (
    <div className='mt-24'>
      <Navbar/>
      <h2 className="text-3xl text-secondary  text-center font-bold">Courses</h2>
      <p className='text-secondary text-sm p-4 text-center w-fit mx-auto'>We prepare your child to excel in different courses</p>

      {/* <Projects/> */}
    </div>
  )
}

export default Portfolio
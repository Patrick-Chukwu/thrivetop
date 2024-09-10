import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import mission from  '../assets/mission.svg'
import vision from  '../assets/vision.svg'
import Impact from '../components/Impact'
import Tutors from '../components/Tutors'

const About = () => {
  return (
    <div className='mt-24'>
      <Navbar/>
      <div className="flex flex-col items-center justify-start gap-4 ">
        {/* <h2 className="text-3xl font-semibold w-[90%] max-w-[600px]">
        </h2> */}
        <h3 className="text-2xl md:text-4xl text-primary font-bold text-center w-[98%] max-w-[710px] mx-auto">Welcome to Thrivetop Academy</h3>
  
        <div className=" gap-4 justify-between items-center max-w-[700px]">
        <p className="text-sm text-brand md:text-xl font-medium p-4 text-left">

        Thrivetop is committed to empowering students from around the world with high-quality education that prepares them for academic excellence and personal growth.


</p>

        </div>
        <div className="flex flex-col gap-8 mt-8 items-center justify-center md:flex-row p-4 w-[95%] mx-auto">
          {/* first */}
    <div className="gap-4 flex flex-col justify-center items-center text-center sm:p-8 py-4 border border-primary hover:bg-primary size-[350px] sm:w-[500px] sm:h-[500x] rounded-2xl shadow-lg">
      <img className='size-12' src={mission} alt="vision icon" />
      <h4 className="font-semibold text-2xl text-brand hover:text-white">Mission</h4>
      <p className="text-xl font-light px-2">To foster a nurturing and dynamic learning environment that cultivates intellectual growth, creativity, and global citizenship. 
      </p>
    </div>

    {/* second */}
    <div className="gap-4 flex flex-col justify-center items-center text-brand text-center sm:p-8 py-4 border border-primary hover:bg-primary size-[350px]  sm:w-[500px] sm:h-[500x] rounded-2xl shadow-xl">
      <img className='size-12' src={vision} alt="vision icon" />
      <h4 className="font-semibold text-2xl hover:text-white">Vision</h4>
      <p className=" text-xl font-light px-2 sm:p-4">To be a global leader in innovative education, empowering students to excel academically, personally, and professionally.</p>
    </div>
        </div>
      </div>
      <h2 className="text-2xl md:text-3xl font-bold text-primary text-center w-full p-4 capitalize">Our School at a Glance.</h2>
      <p className='px-4 text-center text-brand md:text-xl'>We have made incredible impacts and achieved sucess over the years. </p>
      <Impact/>
      <h2 className="text-2xl md:text-3xl font-bold text-primary text-center w-full p-4 capitalize">Our Team</h2>
      <Tutors/>
<Footer/>
   
    </div>
  )
}

export default About
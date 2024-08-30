import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import mission from  '../assets/mission.svg'
import vision from  '../assets/vision.svg'

const About = () => {
  return (
    <div className='mt-24'>
      <Navbar/>
      <div className="flex flex-col items-center justify-start gap-4 ">
        {/* <h2 className="text-3xl font-semibold w-[90%] max-w-[600px]">
        </h2> */}
        <h3 className="text-4xl md:text-6xl font-medium text-center w-[98%] max-w-[710px] mx-auto">Welcome to Thrivetop Academy</h3>
  
        <div className=" gap-4 justify-between items-center max-w-[700px]">
        <p className="text-sm md:text-xl font-medium p-4 text-left">

        At Thrivetop Academy, we are committed to empowering students from around the world with high-quality education that prepares them for academic excellence and personal growth. Our academy offers comprehensive training for various key examinations, including GCSE/IGCSE (EDEXCEL, AQA, OCR), O/A - Level, SAT, and 11+ Grammar School Entrance Exams. We also provide specialized instruction for students in Grade/Year 1 - 11, as well as for those preparing for WASSCE/NECO/UTME and COMMON ENTRANCE (Primary 5 NG).


</p>

        </div>
        <div className="flex flex-col gap-8 mt-8 items-center justify-center md:flex-row p-4 w-[95%] mx-auto">
          {/* first */}
    <div className="gap-4 flex flex-col justify-center items-center text-center sm:p-8 py-4 border border-secondary hover:bg-secondary size-[350px] sm:w-[500px] sm:h-[500x] rounded-2xl shadow-lg">
      <img className='size-12' src={mission} alt="vision icon" />
      <h4 className="font-semibold text-3xl text-primary">Mission</h4>
      <p className="text-xl font-light px-2">To foster a nurturing and dynamic learning environment that cultivates intellectual growth, creativity, and global citizenship. 
      </p>
    </div>

    {/* second */}
    <div className="gap-4 flex flex-col justify-center items-center text-center sm:p-8 py-4 border border-secondary hover:bg-secondary size-[350px] sm:w-[500px] sm:h-[500x] rounded-2xl shadow-xl">
      <img className='size-12' src={vision} alt="vision icon" />
      <h4 className="font-semibold text-3xl text-primary">Vision</h4>
      <p className="text-xl font-light px-2 sm:p-4">To be a global leader in innovative education, empowering students to excel academically, personally, and professionally through a seamless blend of virtual and physical learning experiences.</p>
    </div>
        </div>
      </div>
<Footer/>
   
    </div>
  )
}

export default About
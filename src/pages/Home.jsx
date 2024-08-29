import React from 'react'
import Navbar from '../components/Navbar'
import ImageSlider from '../components/ImageSlider'
import {  FaGithub, FaMailBulk  } from 'react-icons/fa'
import LogoCarousel from '../components/LogoCarousel'
import Footer from '../components/Footer'
import Projects from '../components/Projects'
import Popout from '../components/Popout'

const Home = () => {
  return (
    <div className='flex flex-col mt-24'>
        <Navbar/>
        <section className="p-2 flex  flex-col items-left justify-start items-center">
          <div className=' pl-2 md:px-16'>
          <h2 className='text-primary font-black text-4xl text-left ' >Personal tutoring from amazing <span id="name" className='relative font-black text-4xl'> tutors </span>  matched to your child's needs. </h2>
       
      
          <p className='text-secondary text-2xl text-left'>Prepare for exams, learn a new skill and get better grades.</p>

          </div>
          
          <div className="flex justify-between gap-8 w-[95%] items-center p-2 md:w-1/2 mx-auto my-4">
          <a href="https://calendar.app.google/zYzRKYgvBGGoMdw18" target='_blank' className='text-white bg-secondary px-4 py-2 rounded-md hover:bg-white hover:text-bcolor font-medium border border-black'>Register</a>
         
         {/* <div className="flex justify-center items-center gap-2">
         <a href="https://github.com/Patrick-Chukwu" target='_blank' className='border-none rounded-full p-1 bg-primary text-black hover:text-black hover:bg-white'><FaGithub/></a>
         <a href="mailto:chukwupatrickify@gmail.com" target='_blank' className='border-none rounded-full p-1 bg-primary text-black hover:text-black hover:bg-white'><FaMailBulk/></a>
         </div> */}
          
          </div>
          <Popout/>


        </section>
        <section className='py-4 h-[500px]'>
        {/* <ImageSlider/> */}

        </section>

        <section>
          {/* <LogoCarousel/> */}
 
        </section>
      <section className='w-[98%] max-w-[750px] mx-auto '>
      {/* <h2 className="text-3xl text-secondary  text-center font-bold px-4">Selected works</h2> */}

        {/* <Projects/> */}
      </section>
        <Footer/>
    </div>
  )
}

export default Home
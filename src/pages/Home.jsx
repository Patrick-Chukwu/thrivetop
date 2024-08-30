import React from 'react'
import Navbar from '../components/Navbar'
import ImageSlider from '../components/ImageSlider'
import {  FaGithub, FaMailBulk  } from 'react-icons/fa'
import LogoCarousel from '../components/LogoCarousel'
import Footer from '../components/Footer'
import Projects from '../components/Projects'
import Popout from '../components/Popout'
import girl from '../assets/girl.webp'
const Home = () => {
  return (
    <div className='flex flex-col'>
        <Navbar/>
        <section className="pt-24 bg-primary min-h-dvh flex  flex-col md:flex-row  justify-start items-start">
          <div className="flex flex-col md:gap-10 md:pt-20">

       
          <div className=' pl-2 md:px-16 '>
          <h2 className='text-white font-black text-4xl text-left ' >A better and <span className="text-brand">thriving</span> future for your kids.</h2>
       
      
          <p className='pt-4 md:pt-8 text-white text-2xl text-left'>Get personalized tutoring from <span className="text-brand text-3xl font-black">top</span> tutors  matched to your child's needs. We help children prepare for exams, learn a new skill and get better grades.
          </p>

          </div>
          
          <div className="flex justify-center gap-8 w-[95%] items-center p-2 md:w-1/2 mx-auto my-4">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSegEAUdaOrefzbohIBRn4nnL_4J9T5PNXqwqmvRH6G2iqNV4Q/viewform?usp=sf_link" target='_blank' className='text-white w-full text-xl text-center bg-secondary px-4 py-2 rounded-md hover:bg-white hover:text-bcolor font-medium '>Get Started</a>
         
       
          
          </div>
          </div>

<img src={girl} alt="" />
        </section>
        <Popout/>

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
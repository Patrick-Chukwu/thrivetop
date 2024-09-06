import React from 'react'
import Navbar from '../components/Navbar'
import ImageSlider from '../components/ImageSlider'
import {  FaGithub, FaMailBulk  } from 'react-icons/fa'
import LogoCarousel from '../components/LogoCarousel'
import Footer from '../components/Footer'
import Projects from '../components/Projects'
import Popout from '../components/Popout'
import girl from '../assets/girl.webp'
import TestimonialSection from '../components/TestimonialSection'
import Impact from '../components/Impact'
import FAQSection from '../components/FAQSection'
import Courses from '../components/Courses'
import Parents from '../components/Parents'
const Home = () => {
  return (
    <div className='flex flex-col'>
        <Navbar/>
        <section className="pt-24 bg-primary min-h-dvh flex  flex-col md:flex-row  justify-start items-start">
          <div className="flex flex-col md:gap-10 md:pt-20">

       
          <div className=' pl-2 md:px-16 '>
          <h2 className='text-white font-black text-4xl text-left ' >A better and <span className="text-brand">thriving</span> future for your kids.</h2>
       
      
          <p className='pt-4 md:pt-8 text-white text-2xl text-left'>Get personalized tutoring from <span className="text-brand font-black">top</span> tutors  matched to your child's needs. We help children prepare for exams, learn a new skill and get better grades.
          </p>

          </div>
          
          <div className="flex justify-center gap-8 w-[95%] items-center p-2 md:w-1/2 mx-auto my-4">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSegEAUdaOrefzbohIBRn4nnL_4J9T5PNXqwqmvRH6G2iqNV4Q/viewform?usp=sf_link" target='_blank' className='text-white w-full text-xl text-center bg-secondary px-4 py-2 rounded-md hover:bg-white hover:text-bcolor font-medium '>Get Started</a>
         
       
          
          </div>
          </div>

<img src={girl} alt="" />
        </section>
        <Popout/>

        <section className='py-8 md:h-dvh '>
        {/* <ImageSlider/> */}
        <h2 className="text-2xl md:text-3xl font-bold text-primary text-center w-full p-4 capitalize">Our School at a Glance.</h2>
<Impact/>
        </section>

        <section className='py-8 md:h-dvh bg-primary'>
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center w-full p-4 capitalize">Expert curated courses to help your child unlock any goal with ease.</h2>
        <p className='p-4 text-center text-brand md:text-xl'>Whatever you goal is, we have the perfect course to help your child meet it. </p>
 <Courses/>
        </section>

        <section className='py-8 md:h-dvh bg-white text-center'>
        <h2 className="text-2xl md:text-3xl font-bold text-primary text-center w-full p-4 capitalize">Listen to what parents have to say about us.</h2>
<Parents/>
<a href="https://docs.google.com/forms/d/e/1FAIpQLSegEAUdaOrefzbohIBRn4nnL_4J9T5PNXqwqmvRH6G2iqNV4Q/viewform?usp=sf_link" target='_blank' className='text-white w-full text-xl text-center bg-secondary px-4 py-2 rounded-md hover:bg-white hover:text-bcolor font-medium '>Register your child</a>

        </section>
      <section className='w-full mx-auto '>
  

        <TestimonialSection/>
      </section>
      <section className='w-full  m-auto py-8 '>
     <FAQSection/>
      </section>
        <Footer/>
    </div>
  )
}

export default Home
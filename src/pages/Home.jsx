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
import { Link } from 'react-router-dom'
import Presence from '../components/Presence'
const Home = () => {
  return (
    <div className='flex flex-col'>
        <Navbar/>
        <section className=" filling slideBackground animated-background pt-20 md-pt-20vh  min-h-dvh flex  flex-col md:flex-row  justify-start items-start ">
          <div className="flex flex-col md:gap-10 md:pt-20 bg-black bg-opacity-80 gap-8 h-dvh justify-center">

       
          <div className=' pl-2 md:px-16 '>
          <h2 className='text-white pb-4 font-black text-4xl text-left md:px-[10%] lg:px-[15%]' >A better and <span className="text-secondary">thriving</span> future for your kids.</h2>
       
      
          <p className='pt-4 md:pt-8 text-white text-2xl text-left md:px-[10%] lg:px-[15%] md:text-3xl md:font-medium'>Get personalized tutoring from <span className="text-secondary font-black">top</span> tutors  matched to your child's needs. We help children prepare for exams, learn a new skill and get better grades.
          </p>

          </div>
          
          <div className="flex justify-center gap-8 w-[95%] items-center p-2 md:w-1/2 mx-auto my-4">
             <Link to="/register"  
 className='bg-secondary text-white py-3 px-4 w-full text-center text-xl font-medium hover:text-white rounded-md lg:rounded-lg md:rounded-md xl:rounded-xl '>Get Started</Link>
         
       
          
          </div>
          </div>

{/* <img src={girl} alt="" /> */}
        </section>
        <Popout/>

        <section className='py-8 md:h-dvh '>
        {/* <ImageSlider/> */}
        <h2 className="text-2xl md:text-3xl font-bold text-primary text-center w-full p-4 capitalize">Our School at a Glance.</h2>
        <p className='px-4 text-center text-brand md:text-xl'>Learn from a community of expert tutors with diverse curriculum experience.</p>

<Impact/>
        </section>

        <section className='py-8 md:h-dvh bg-primary'>
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center w-full p-4 capitalize">Explore our courses.</h2>
        <p className='px-4 text-center text-white md:text-xl'>Whatever your goal is, we have the perfect course to help your child meet it. </p>
 <Courses/>
        </section>

        <section className='py-8 md:h-dvh bg-white text-center'>
        <h2 className="text-2xl md:text-3xl font-bold text-primary text-center w-full p-4 capitalize">Here is what parents are saying about us.</h2>
<Parents/>

<Link to="/register"  
 className='bg-secondary text-white py-3 text-xl px-4 w-fit font-medium hover:text-white rounded-md lg:rounded-lg md:rounded-md xl:rounded-xl '>Register your child</Link>

        </section>
        <section>
        <Presence/>
      </section>
      <section className='w-full mx-auto bg-primary pt-10'>
  
      <h2 className="text-2xl md:text-3xl font-bold text-white text-center w-full capitalize">Meet our tutors</h2>
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
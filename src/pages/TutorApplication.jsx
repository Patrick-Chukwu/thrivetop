import React from 'react'
import Navbar from '../components/Navbar'

const TutorApplication = () => {
  return (
    <div className='pt-24'>
        <Navbar/>

        <div className="flex flex-col items-center mx-auto px-4 max-w-5xl gap-3">
        <h2 className="text-2xl md:text-4xl text-primary  text-center font-bold">Become a tutor</h2>

          <p className="text-xl text-brand font-medium">
          With Thrivetop Academy, you can teach students online and fit lessons into your schedule. Simply register, deliver great lessons and get paid. It's that easy.
          </p>
          <p className="text-brand self-start">Join us today to become a tutor and earn money teaching what you love.</p>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSffQMfu-pAJapvGIeIMW4VULmAUWySDN57C_3qp6VS8lu40hg/viewform?usp=sf_link" target='_blank' className='bg-secondary text-white px-4 py-2 rounded-md text-xl'>Apply Now</a>

        </div>
    </div>
  )
}

export default TutorApplication
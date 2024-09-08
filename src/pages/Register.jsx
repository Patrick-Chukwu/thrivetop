import React from 'react'
import Navbar from '../components/Navbar'

const Register = () => {
  return (
    <div className='mx-auto w-fit'>
         <Navbar/>
         <h3 className="text-2xl text-primary md:text-4xl font-bold text-left md:text-center w-[98%]  px-2 mx-auto">Become a tutor and earn money teaching what you love</h3>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSegEAUdaOrefzbohIBRn4nnL_4J9T5PNXqwqmvRH6G2iqNV4Q/viewform?embedded=true" width="375" height="2321" frameborder="0" marginheight="0" marginwidth="0" className=''>Loading…</iframe>
    </div>
  )
}

export default Register
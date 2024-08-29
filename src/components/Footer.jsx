import { motion } from 'framer-motion'
import React from 'react'
import logo from '../assets/thrivetoplogo.png'
import { FaLinkedin, FaTiktok, FaX, FaYoutube } from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='flex flex-col items-center py-4 justify-start gap-8 min-h-32 border-t border-bcolor w-full'>
      <div className="flex justify-between px-8 items-center gap-4 w-full">
        <img src={logo} alt="ThriveTop Academy logo" className='w-32' />
        <div className="flex gap-2">
          <a href="https://www.instagram.com/thrivetop_academy?igsh=dHA5emwwcng5aGIz&utm_source=qr" target='_blank' >  
          <FaInstagram className='md:size-6'/>
           </a>
          <a href="https://x.com/thrivetop_acad/status/1813609509887381556?s=46" target='_blank' className=' bg-white text-blue-800'>   
          <FaX className='md:size-6'/></a>
          <a href="https://www.linkedin.com/in/thrivetop-academy-407316282?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target='_blank' className=' bg-white text-blue-800'>   <FaLinkedin className='md:size-6'/></a>
          <a href="https://www.tiktok.com/@thrivetop_academy?_t=8oo0AtRQ3Qj&_r=1" target='_blank' className=' bg-white text-blue-800'> 
 <FaTiktok className='md:size-6'/></a>
          <a href="https://youtube.com/@thrivetop?si=GVeFDbZ7rkXsbcb_" target='_blank' className=' bg-white text-blue-800'>   

          <FaYoutube className='md:size-6'/></a>
        </div>
      </div>
     
        <div className="flex justify-between items-center gap-2">
  
<p> Thrivetop Academy. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer
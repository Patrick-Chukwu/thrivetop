import { motion } from 'framer-motion'
import React from 'react'
import logo from '../assets/thrivetoplogo.png'
import { FaLinkedin, FaTiktok, FaX, FaYoutube } from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa'
import { BsInstagram, BsTwitterX } from 'react-icons/bs'
import { IoLogoInstagram } from 'react-icons/io5'
const Footer = () => {
  return (
    <div className='flex flex-col items-center py-4 justify-start gap-8 min-h-32 border-t border-bcolor w-full'>
      <div className="flex justify-between px-8 items-center gap-4 w-full">
        <img src={logo} alt="ThriveTop Academy logo" className='w-32' />
        <div className="flex gap-2">
          <a href="https://www.instagram.com/thrivetop_academy?igsh=dHA5emwwcng5aGIz&utm_source=qr" target='_blank' className='bg-gradient-to-r from-[#E1306C] via-[#C13584] to-[#F56040] rounded-md text-white' >  
          <FaInstagram className='md:size-6'/>
           </a>
          <a href="https://x.com/thrivetop_acad/status/1813609509887381556?s=46" target='_blank' className=' bg-black text-white rounded-sm'>   
          <BsTwitterX className='md:size-6'/></a>
          <a href="https://www.linkedin.com/in/thrivetop-academy-407316282?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target='_blank' className=' bg-white text-[#0A66C2]'>   <FaLinkedin className='md:size-6'/></a>
          <a href="https://www.tiktok.com/@thrivetop_academy?_t=8oo0AtRQ3Qj&_r=1" target='_blank' className=' bg-black text-white'> 
 <FaTiktok className='md:size-6'/></a>
          <a href="https://youtube.com/@thrivetop?si=GVeFDbZ7rkXsbcb_" target='_blank' className=' text-[#FF0000] bg-white'>   

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
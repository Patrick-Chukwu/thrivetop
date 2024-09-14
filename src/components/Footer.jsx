import { motion } from 'framer-motion'
import React from 'react'
import logo from '../assets/thrivetoplogo.png'
import { FaLinkedin, FaTiktok, FaX, FaYoutube } from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa'
import { BsInstagram, BsTwitterX } from 'react-icons/bs'
import { IoLogoInstagram } from 'react-icons/io5'
import GoogleMap from './GoogleMap'
import { MdCall, MdEmail } from 'react-icons/md'
const Footer = () => {
  return (
    <div className='flex flex-col items-center py-4 justify-start gap-4 md:gap-8 min-h-32 w-full bg-white'>
      <div className="flex justify-between px-8 items-center gap-4 w-full">
        <img src={logo} alt="ThriveTop Academy logo" className='w-32' />
        <div className="flex gap-2">
          <a href="https://www.instagram.com/thrivetop_academy?igsh=dHA5emwwcng5aGIz&utm_source=qr" target='_blank' className='hover:bg-gradient-to-r from-[#E1306C] via-[#C13584] to-[#F56040] hover:rounded-sm hover:text-white' >  
          <FaInstagram className='md:size-6'/>
           </a>
          <a href="https://x.com/thrivetop_acad/status/1813609509887381556?s=46" target='_blank' className=' hover:bg-black hover:text-white'>   
          <BsTwitterX className='md:size-6'/></a>
          <a href="https://www.linkedin.com/in/thrivetop-academy-407316282?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target='_blank' className=' hover:bg-white hover:text-[#0A66C2]'>   <FaLinkedin className='md:size-6'/></a>
          <a href="https://www.tiktok.com/@thrivetop_academy?_t=8oo0AtRQ3Qj&_r=1" target='_blank' className=' hover:bg-black hover:text-white'> 
 <FaTiktok className='md:size-6'/></a>
          <a href="https://youtube.com/@thrivetop?si=GVeFDbZ7rkXsbcb_" target='_blank' className=' hover:text-[#FF0000] hover:bg-white'>   

          <FaYoutube className='md:size-6'/></a>
        </div>
      </div>
      <div className="flex justify-between w-full px-4 text-[12px] items-center">
        <div className="flex items-center justify-center"><MdEmail/><p>: thrivetopacademy@gmail.com</p></div>
        <div className="flex items-center justify-center"><MdCall/><p>: +2349099382719</p></div>

      </div>
     
     {/* google map */}
     <GoogleMap/>
        <div className="flex justify-between items-center gap-2">
  
<p> &copy; 2024 Thrivetop Academy. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer
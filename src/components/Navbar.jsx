import React, {useState} from 'react'
import logo from '../assets/thrivetoplogo.png'
import { Link } from 'react-router-dom';
import {  FaLinkedin } from 'react-icons/fa';
import {   FaXTwitter } from 'react-icons/fa6';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const closeMenu = () => {
        setIsOpen(false);
    };
  return (
    <nav className='p-4  bg-white  fixed top-0 left-0 w-full z-50 text-brand '>
      <div className='flex items-center justify-between'>

        <Link to="/"><img src={logo} className='bg-white w-36 py-1 h-12' alt="Thrivetop Academy Logo" /></Link>
        <div className="hidden md:flex justify-between items-center gap-4">
            <Link to="/" className='font-medium text-xl hover:text-primary'>Home</Link>
            <Link to="/about" className='font-medium text-xl hover:text-primary'>About Us</Link>
            <Link to="/portfolio" className='font-medium text-xl hover:text-primary hidden md:block'>Services</Link>
            <Link to="/blog" className='font-medium text-xl hover:text-primary hidden md:block'>Tutors</Link>
        </div>
        <div className="flex items-center justify-center gap-2">
        <div className="md:flex justify-center items-center gap-2 hidden ">
    
{/* 
          <a href="https://www.linkedin.com/in/patrick-chukwu/" target='_blank' className='border-none rounded-full p-1 bg-primary text-black hover:text-black hover:bg-white'><FaLinkedin/></a>
     
          <a href="https://x.com/PattyFean" target='_blank' className='border-none rounded-full p-1 bg-primary text-black hover:text-black hover:bg-white'><FaXTwitter/></a> */}
         <Link to="/register"  onClick={closeMenu}
 className='bg-secondary text-center  text-white py-2 px-4 w-36 hover:bg-primary font-medium hover:text-white rounded-md lg:rounded-lg md:rounded-md xl:rounded-md '>Get Started</Link>
  <Link to="/login"  onClick={closeMenu}
 className='bg-primary w-36 text-center hover:bg-secondary text-white py-2 px-4 font-medium hover:text-white rounded-md lg:rounded-lg md:rounded-md xl:rounded-md '>Login</Link>
        </div>
        <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-primary inline-flex items-center justify-center p-1 rounded-md text-black hover:bg-white hover:text-black focus:outline-none focus:bg-white focus:text-black"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

        </div>


      </div>
   
          <div className={`${isOpen ? 'block' : 'hidden'} lg:hidden`} id="mobile-menu">
        <div className="min-h-dvh px-1 pt-2 pb-60 space-y-1 sm:px-3 flex flex-col gap-2 text-xl font-normal text-brand relative z-50 bg-white">
          <Link onClick={closeMenu}
 to="/" className="text-brand font-normal text-xl block px-3 py-2 rounded-md  hover:bg-primary">
            Home
          </Link>

          <Link onClick={closeMenu}
to="/about" className="text-brand font-normal text-xl block px-3 py-2 rounded-md hover:bg-primary">
            About Us
          </Link>
          <Link onClick={closeMenu}
 to="/portfolio" className="text-brand font-normal text-xl block px-3 py-2 rounded-md hover:bg-primary">
            Services
          </Link>
          <Link onClick={closeMenu}
 to="/blog" className="text-brand font-normal text-xl block px-3 py-2 rounded-md hover:bg-primary">
            Tutors
          </Link>
          <Link to="/register"  onClick={closeMenu}
 className='bg-secondary text-center  text-white py-2 px-4 w-36 hover:bg-primary font-medium hover:text-white rounded-md lg:rounded-lg md:rounded-md xl:rounded-xl '>Get Started</Link>
  <Link to="/login"  onClick={closeMenu}
 className='bg-primary w-36 text-center hover:bg-secondary text-white py-2 px-4 font-medium hover:text-white rounded-md lg:rounded-lg md:rounded-md xl:rounded-xl '>Login</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
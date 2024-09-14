import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ClassroomLink = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-20">
        <Navbar/>
        <h2 className="text-2xl md:text-4xl text-secondary  text-center font-bold">Existing Students</h2>
        <p className="text-base w-[90%] py-4 mx-auto text-brand max-w-4xl">Login with your student email to view and submit assignments, classworks and resources from your tutor.</p>
      <a
        href="https://classroom.google.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-primary text-white px-4 py-2 rounded-md hover:bg-secondary"
      >
        Go to Classroom
      </a>
      <Footer/>
    </div>
  );
};

export default ClassroomLink;

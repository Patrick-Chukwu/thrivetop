import React, { useState } from 'react';
import { BiPointer } from 'react-icons/bi';
import { BsArrowBarRight, BsArrowUpRightSquare } from 'react-icons/bs';
import { FiArrowLeft } from 'react-icons/fi';
import { LuPointer } from 'react-icons/lu';
import { TbPointer, TbPointerCheck } from 'react-icons/tb';

const CourseItem = ({ children, title, description, backgroundImage }) => {
  const [isVisible, setIsVisible] = useState(false);

  // Toggle the visibility of the description when ImpactItem is clicked
  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div
      className="relative flex border rounded-lg shadow-lg flex-col items-start w-[90%] md:w-[30%] px-10 py-28 md:py-32 cursor-pointer bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`, // Set the background image dynamically
      }}
      onClick={handleClick}
    >
      {/* Optional overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>

      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-2xl md:3xl font-bold text-white flex items-center justify-between">{title}  <BsArrowUpRightSquare className='size-4'/></h3>

        {/* The p element that will be toggled */}
        <p className={`text-base text-white transition-opacity duration-300 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
          {description}
        </p>

        {/* Children for additional elements if needed */}
        {children}
      </div>
    </div>
  );
};

export default CourseItem;

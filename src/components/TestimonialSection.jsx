import React, { useEffect, useState } from 'react';
import one from '../assets/DamilolaBio.webp'

import two from '../assets/DonaldMaths.webp'
import three from '../assets/DeborahMaths.webp'
import four from '../assets/AbisolaChemi.webp'
import five from '../assets/Aramide_English.webp'
import { Link } from 'react-router-dom';


const testimonials = [
  {
    id: 1,
    image: one,
    text: 'ThriveTop Academy has been a source of encouragement to me. my experience with the academy has been incredibly positive. It truly cares about its students and their futures, and I am proud to be associated with such an outstanding institution. It offers a comprehensive and flexible learning environment that caters to students from various backgrounds and skill levels.',
    name: 'Tutor Damilola',
    title: 'MSc. Public Health',
  },
  {
    id: 2,
    image: two,
    text: 'Working with Thrivetop has been an incredibly rewarding experience. The organization has significantly contributed to my personal and professional growth, providing a nurturing environment for continuous development. I take pride in the positive impact I’ve had on the academic achievements of numerous students worldwide. ',
    name: 'Tutor Donald',
    title: 'BSc. Mathematics',
  },
  {
    id: 3,
    image: four,
    text: "Working with ThriveTop Academy over the years has been enjoyable. I'm happy with the organization's contribution to my career and personal development. Through this academy, I have taught many students all across the world, and I am proud of the influence I have had on their academic progress.",
    name: 'Tutor Abisola ',
    title: 'BSc.(Ed) Chemistry ',
  },
  {
    id: 4,
    image: three,
    text: "I've had a fantastic experience working with ThriveTop Academy, and I've seen significant improvements in my skills and knowledge. The organization have exceeded my expectations and provided me with valuable insight and skills that have already impacted my career. It has been a journey of growth and learning, and I'm so much grateful for the experience. ",
    name: 'Tutor Deborah',
    title: 'MSc. Statistics',
  },
  {
    id: 5,
    image: five,
    text: "ThriveTop Academy has given me the chance to assist a wide range of pupils in overcoming there challenges in the classroom and also observing their growth. This has strengthened my capacity to understand each student's unique requirements and build personal relationships with them. Because of the flexibility of online tutoring, I have been able to get in touch with students who are located in different parts of the country.",
    name: 'Tutor Aramide',
    title: 'B.A. Ed. English ',
  },
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

    // Auto-scroll effect every 30 seconds
    useEffect(() => {
        const interval = setInterval(() => {
          handleNext();
        }, 5000); // 30 seconds
    
        return () => clearInterval(interval);
      }, []);

  return (
    <div className="flex flex-col items-center justify-center pb-10 py-4 bg-primary gap-6">
       
        <div className="flex justify-between items-center gap-2 mt-2"> 
        <Link to="/becometutor"  
 className='bg-secondary text-white py-3 px-2 w-fit text-center text-base font-medium hover:text-white rounded-md lg:rounded-lg md:rounded-md xl:rounded-xl '>Become a tutor</Link>

        <p className="text-sm md:text-xl text-center text-white ">Join a community of top tutors.</p>

        </div>
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${(currentIndex * 100) }%)` }}
      >
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="flex-shrink-0 w-full md:w-1/2 p-4"
          >
            <div className="bg-white rounded-lg shadow-lg p-4 py-2 h-[520px] md:min-h-[450px] flex flex-col items-center">
              <img
                className="size-40 object-cover p-1 border border-primary rounded-full mb-2 md:mb-4"
                src={testimonial.image}
                alt={testimonial.name}
              />
              <p className="text-black text-center mb-4"> <span className="text-3xl text-primary">&ldquo;</span> {testimonial.text} <span className="text-3xl text-primary">&rdquo;</span> </p>
              <h3 className="text-lg font-semibold text-primary">{testimonial.name}</h3>
              <p className="text-sm text-brand">{testimonial.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="flex mt-2 space-x-4">
      <button
        onClick={handlePrev}
        className="p-2 px-3 bg-secondary text-white rounded-full hover:bg-brand"
      >
        &larr;
      </button>
      <button
        onClick={handleNext}
        className="p-2 px-3 bg-secondary text-white rounded-full hover:bg-brand"
      >
        &rarr;
      </button>
    </div>
  </div>
  );
};

export default TestimonialSection;

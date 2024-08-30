import React, { useEffect, useState } from 'react';

// Sample data for testimonials
const testimonials = [
  {
    id: 1,
    image: 'https://via.placeholder.com/150',
    text: 'Thrivetop Academy is a place to breed, nature and unleash great potentials through thorough research, planning and teaching. It so beautiful seeing students achieving great results in academic success and I am super proud to a part of global impact through this academy.',
    name: 'Esther Adewuyi',
    title: 'M.Sc., Cell and Molecular Biology (In-View)',
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/150',
    text: 'Working with Thrivetop has been an incredibly rewarding experience. The organization has significantly contributed to my personal and professional growth, providing a nurturing environment for continuous development. I take pride in the positive impact I’ve had on the academic achievements of numerous students worldwide. ',
    name: 'Donald Erharhine ',
    title: 'BSc. Mathematics',
  },
  {
    id: 3,
    image: 'https://via.placeholder.com/150',
    text: "It's indeed a privilege being a part of thrivetop academy.  How I wish I had joined earlier,  all the same I thank God for His mercies. The  academy has been a source of blessing to me so far. I am much more experienced and better than I started and also glad I could make academic impact on students globally. ",
    name: 'Titus Aderonke Esther ',
    title: 'M.sc Biochemistry ',
  },
  {
    id: 4,
    image: 'https://via.placeholder.com/150',
    text: "I've had a fantastic experience working with ThriveTop Academy, and I've seen significant improvements in my skills and knowledge. The organization have exceeded my expectations and provided me with valuable insight and skills that have already impacted my career. It has been a journey of growth and learning, and I'm so much grateful for the experience. ",
    name: 'Deborah Salau',
    title: 'MSc.',
  },
  {
    id: 5,
    image: 'https://via.placeholder.com/150',
    text: "It's my first time teaching students online and it's been a great experience. I'm grateful for this opportunity and it's been a pleasure working with ThriveTop Academy in this short period of time.",
    name: 'Marvellous Oluwakeye',
    title: 'M.A. Ed. English ',
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
    <div className="flex flex-col items-center justify-center py-10 bg-primary">
        <h2 className="text-3xl font-bold text-white text-center w-full">Hear from our tutors</h2>
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${(currentIndex * 100) }%)` }}
      >
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="flex-shrink-0 w-full md:w-1/3 p-4"
          >
            <div className="bg-white rounded-lg shadow-lg p-4 py-2 min-h-[400px] flex flex-col items-center">
              <img
                className="w-24 h-24 rounded-full mb-2 md:mb-4"
                src={testimonial.image}
                alt={testimonial.name}
              />
              <p className="text-black text-center mb-4">{testimonial.text}</p>
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

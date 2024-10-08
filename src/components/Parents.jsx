import React, { useEffect, useState } from 'react';

// Sample data for testimonials
const testimonials = [
  {
    id: 1,
    text: "The teachers are supportive, flexible, patient, work well with parents, lessons are structured and can work with the school’s syllabus. They are awesome and incredible Tutors. Keep up the good work. The proprietor also works immediately on feedback.",
    name: "Val, Vic., and NIni's Mum",
    title: 'UK',
  },
  {
    id: 2,
    text: "Excellent experience, excellent tutors and professionalism. I love the fact that they give monthly test and send results to parents. Keep aiming for the top.",
    name: "Dunsin and Morire's parent",
    title: 'Canada',
  },
  {
    id: 3,
    text: "They are very timely, punctual and have personal interest in the development of my children. Continue the good work.",
    name: "Ayomide and Zion's parent",
    title: 'Uk',
  },
  {
    id: 4,
    text: "Good evening forget to tell you Tomiwa got 5 University spaces,  he has chosen to study Business Marketing at Birmingham University.",
    name: "Mrs Adenike ",
    title: 'UK',
  },
  {
    id: 5,
    text: "Thanks uncle Simon. You are an excellent teacher. Naomi is difficult to teach at this time but you work with God's grace. God bless you and yours.",
    name: 'Mrs Fisayo',
    title: 'UK',
  },
];

const Parents = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Auto-scroll effect every 30 seconds (30,000 milliseconds)
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // 30 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center py-10 bg-white gap-6">
      {/* Testimonials */}
      <div className="relative w-full max-w-4xl overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex-shrink-0 w-full p-4"
            >
              <div className="bg-primary rounded-lg shadow-lg p-4 pt-10 h-[300px] flex flex-col justify-between items-center">
                <p className="text-white text-center mb-4">
                  <span className="text-3xl text-brand">&ldquo;</span>{' '}
                  {testimonial.text}{' '}
                  <span className="text-3xl text-brand">&rdquo;</span>
                </p>
                <h3 className="text-lg font-semibold text-brand">
                  {testimonial.name}
                </h3>
                <p className="text-brand font-semibold text-center mb-4">- {testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="flex mt-2 space-x-2">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`h-3 w-3 rounded-full cursor-pointer ${
              currentIndex === index ? 'bg-secondary' : 'bg-brand'
            }`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Parents;

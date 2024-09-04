import React, { useState, useEffect } from 'react';

const faqs = [
  {
    question: "What subjects do you offer?",
    answer: "We offer a wide range of subjects including Math, Science, English, and Social Studies, all tailored for K-12 students.",
  },
  {
    question: "How do I enroll my child?",
    answer: "Enrollment is easy! Simply sign up on our website and select the subjects your child needs help with.",
  },
  {
    question: "Are the classes live or pre-recorded?",
    answer: "Our classes are live one-on-one sessions with experienced teachers.",
  },
  {
    question: "Can I track my child's progress?",
    answer: "Absolutely! Parents can track their child’s progress through our monthly performance reports.",
  },
  {
    question: "Is there a free trial?",
    answer: "Yes! We offer a free trial for you and your child/ward to experience our quality service.",
  },
];

const FAQItem = ({ faq, isOpen, onClick }) => (
  <div className="border-b border-secondary py-4">
    <div className="flex justify-between items-center cursor-pointer" onClick={onClick}>
      <h3 className="text-lg font-medium text-black">{faq.question}</h3>
      <svg
        className={`w-6 h-6 transform ${isOpen ? 'rotate-180' : ''}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </div>
    {isOpen && <p className="mt-2 text-brand">{faq.answer}</p>}
  </div>
);

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleOutsideClick = (event) => {
    if (openIndex !== null) {
      setOpenIndex(null);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [openIndex]);

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center text-primary mb-6">Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <FAQItem
          key={index}
          faq={faq}
          isOpen={openIndex === index}
          onClick={(e) => {
            e.stopPropagation();
            handleClick(index);
          }}
        />
      ))}
    </div>
  );
};

export default FAQSection;

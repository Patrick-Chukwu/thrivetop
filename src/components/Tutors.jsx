import React from 'react'

import Simon from '../assets/Simon.jpeg';
import Damilola from '../assets/DamilolaBio.webp';
import Donald from '../assets/DonaldMaths.webp';
import Adewuyi from '../assets/Adewuyi.jpg';


const tutors = [
    {
        id: 1,
        image: Simon,
        name: 'Simon Egwuaba',
        subject: 'Maths/Phy',
        qualification: 'Bsc. Mathematics (PGDE)'

    },
    {
        id: 2,
        image: Damilola,
        name: 'Damilola Egwuaba',
        subject: 'Maths/Phy',
        qualification: 'MSc. Chemistry'

    },
    {
        id: 3,
        image: Donald,
        name: 'Donald Erharhine',
        subject: 'Maths',
        qualification: 'BSc. Mathematics'

    },
    {
        id: 4,
        image: Adewuyi,
        name: 'Adewuyi',
        subject: 'Maths/Phy',
        qualification: 'M.Sc Cell and Molecular Biology'

    }
]
const Tutors = () => {
  return (
    <div className='w-full flex flex-col md:flex-row justify-between items-center p-4 gap-4'>
        {tutors.map((tutor) => (
            <div 
            key={tutor.id}
            className="flex flex-col gap-2 w-full border shadow-md rounded-md">
                  <img
                className="w-full h-60 rounded-lg mb-2 md:mb-4 object-cover object-top"
                src={tutor.image}
                alt={tutor.name}
              />
              <h2 className='text-2xl text-center text-primary font-medium'>{tutor.name}</h2>
              <p className="text-center text-base font-normal text-brand">{tutor.qualification}</p>
              <p className="text-center text-xs font-normal text-black">{tutor.subject}</p>
            </div>
        ))}
        
    </div>
  )
}

export default Tutors
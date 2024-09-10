import React from 'react'

import Simon from '../assets/Simon.webp';
import Damilola from '../assets/DamilolaBio.webp';
import Donald from '../assets/DonaldMaths.webp';
import Adewuyi from '../assets/Adewuyi.webp';
import victor from '../assets/victor.png';
import olatunji from '../assets/olatunji.jpeg';
import wisdom from '../assets/wisdom.png';
import deborah from '../assets/DeborahMaths.webp';
import barnabas from '../assets/barnabas.webp';
import AbisolaChemi from '../assets/AbisolaChemi.webp';
import esther from '../assets/esther.jpg';

import dako from '../assets/dako.jpg';
import aderonke from '../assets/aderonke.webp';
import ganiyat from '../assets/ganiyat.jpg';
import taofeeq from '../assets/taofeeq.png';
import aramide from '../assets/Aramide_English.webp';

import bukunmi from '../assets/bukunmi.webp';
import Dorcas from '../assets/aderonke.webp';
import Marvellous from '../assets/Marvellous.webp';
import okonkwo from '../assets/okonkwo.webp';
import jesse from '../assets/jesse.webp';
import patrick from '../assets/Patrick.webp';

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
        name: 'Esther Adewuyi',
        subject: 'Biology/Chemistry',
        qualification: 'M.Sc Cell and Molecular Biology'

    },
    {
      id: 5,
      image: victor,
      name: 'Victor lawal',
      subject: 'English',
      qualification: 'B.A.'

  },
      {
        id: 6,
        image: olatunji,
        name: 'Deborah Olatunji',
        subject: 'Maths/Phy',
        qualification: 'B.Tech'

    },
    {
        id: 7,
        image: wisdom,
        name: 'Wisdom Nissi',
        subject: 'Maths/Phy',
        qualification: 'BSc. Mathematics'

    },
    {
        id: 8,
        image: deborah,
        name: 'Deborah Salau',
        subject: 'Maths',
        qualification: 'MSc.'

    },
    {
        id: 9,
        image: barnabas,
        name: 'Barnabas Adeyemo',
        subject: 'Sciences',
        qualification: 'BSc. Materials Science and Engineering'

    },
    {
      id: 10,
      image: AbisolaChemi,
      name: 'Abisola Faluyi',
      subject: 'Bio/Chemistry',
      qualification: 'BSc.(Ed) Chemistry.'

  },

{
    id: 11,
    image: patrick,
    name: 'Patrick Chukwu',
    subject: 'Web development',
    qualification: 'Bsc. Mathematics'

},
{
  id: 12,
  image: dako,
  name: 'Esther Dako',
  subject: 'Maths',
    qualification: 'Bsc. Mathematics'
},
{
    id: 13,
    image: aderonke,
    name: 'Titus Aderonke Esther',
    subject: 'Chemistry',
    qualification: 'M.sc Biochemistry'

},
{
    id: 14,
    image: ganiyat,
    name: 'Ogundijo Ganiyat Omowunmi ',
    subject: 'Mathematics',
    qualification: 'B. Ed Mathematics'

},
{
  id: 15,
  image: taofeeq,
  name: 'TAOFEEQ OLAWALE',
  subject: 'Computer',
  qualification: 'Bsc. Computer Science'

},
  {
    id: 16,
    image: aramide,
    name: 'Priscilla Aramide',
    subject: 'English',
    qualification: 'Bsc.(Edu) English Language.'

},
{
    id: 17,
    image: bukunmi,
    name: 'Bukunmi Aregbesola',
    subject: 'English',
    qualification: 'B.Ed. English language'

},
{
    id: 18,
    image: Dorcas,
    name: 'Dorcas Kayode',
    subject: 'Science',
    qualification: 'B.Agric, Crop Protection and Environmental Biology '

},
{
    id: 19,
    image: Marvellous,
    name: 'Marvellous Oluwakeye',
    subject: 'English',
    qualification: 'M.A. Ed. English'

},
{
  id: 20,
  image: okonkwo,
  name: 'Kehinde Okonkwo',
  subject: 'Science',
  qualification: 'BSc. Business Administration'

},
{
  id: 21,
  image: jesse,
  name: 'Jesse Josh',
  subject: 'English',
  qualification: 'B.A. English'

},
{
  id: 22,
  image: esther,
  name: 'Esther Olowolade',
  subject: 'Science',
  qualification: 'Bsc. Botany'

},

]
const Tutors = () => {
  return (
    <div className='w-full flex flex-col md:flex-row justify-between items-center p-4 gap-4 flex-wrap'>
        {tutors.map((tutor) => (
            <div 
            key={tutor.id}
            className="flex flex-col gap-2 w-full md:w-[23%] md:h-[400px] border shadow-md rounded-md pb-2">
                  <img
                className="w-full h-60 rounded-lg mb-2 md:mb-4 object-cover object-top"
                src={tutor.image}
                alt={tutor.name}
              />
              <h2 className='text-2xl text-center text-primary font-medium'>{tutor.name}</h2>
              <p className="text-center text-base font-normal text-brand">{tutor.qualification}</p>
              <p className="text-center text-xs font-normal text-black">{tutor.subject} tutor</p>
            </div>
        ))}
        
    </div>
  )
}

export default Tutors
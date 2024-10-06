import React from 'react'
import uk from '../assets/uk.png'
import usa from '../assets/usa.png'
import nigeria from '../assets/nigeria.png'
import poland from '../assets/poland.png'
import canada from '../assets/canada.png'
import flag from '../assets/flags.jpeg'



const Presence = () => {
  return (
    <section className='flex flex-col justify-center items-center p-6 px-2 gap-8'>
              <div className="flex gap-2 flex-col">
              <h2 className="text-2xl md:text-4xl text-primary  text-center font-bold">Our Community</h2>
              <p className="text-base text-brand  font-medium text-left px-2 py-1 md:text-center w-[98%] mx-auto">We have a wide coverage of clients and tutors across different countries of the world.</p>
              </div>

                <div className="flex flex-row gap-4 flex-wrap  mx-auto justify-center">
                <div className="flex flex-col justify-center items-center gap-2 border border-brand p-4 rounded-md w-[47%] md:w-[30%]">
                    <img src={uk} alt="Flag of Uk" />
                    <p className='font-semibold text-base '>United Kingdom</p>
                </div>

                <div className="flex flex-col justify-center items-center gap-2 border w-[47%] border-brand p-4 rounded-md md:w-[30%]">
                    <img src={usa} alt="Flag of USA" />
                    <p className='font-semibold text-base '>United State of America</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-2 border border-brand p-4 rounded-md w-[47%]  md:w-[30%]">
                    <img src={nigeria} alt="Flag of Nigeria" />
                    <p className='font-semibold text-base '>Nigeria</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-2 border w-[47%] border-brand p-4 rounded-md  md:w-[30%]">
                    <img src={canada} alt="Flag of Canada" />
                    <p className='font-semibold text-base '>Canada</p>
                </div>
                <div className="flex  md:w-[30%] flex-col justify-center items-center gap-2 border border-brand p-4 rounded-md w-[47%]">
                    <img src={poland} alt="Flag of poland" />
                    <p className='font-semibold text-base '>Poland</p>
                </div>
                <div className="flex  md:w-[30%] flex-col justify-center items-center gap-2 border border-brand p-4 rounded-md w-[47%]">
                    <img src={flag} alt="Flag of the world" />
                    <p className='font-semibold text-base '>and counting...</p>
                </div>

                </div>
            

        
    </section>
  )
}

export default Presence
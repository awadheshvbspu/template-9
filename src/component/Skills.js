import React from 'react';
import html from '../assests/html.png';
import css from '../assests/css.png';
import javascript from '../assests/javascript.png';
import reactjs from '../assests/react.png';
import bootstrap from '../assests/Bootstrap.png';
import tailwind from '../assests/tailwind.png';

export default function Skills() {
  return (
    <>
        <div className='w-full bg-[#0a192f] text-gray-300' name='skills'>
            {/* container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='text-4xl text-gray-300 py-4'>
                    <p className='text-3xl font-bold inline border-b-4 border-pink-600 '>Experience</p>
                    <p className='py-4'> These are the technologies I've worked with</p>
                </div>
                <div className='w-full grid grid-col-2 sm:grid-cols-3 gap-4 text-center py-4'>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                        <img src={html} alt='' className='w-20 mx-auto' />
                        <p>HTML</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                        <img src={css} alt='' className='w-20 mx-auto' />
                        <p>CSS</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                        <img src={javascript} alt='' className='w-20 mx-auto' />
                        <p>JAVASCRIPT</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                        <img src={reactjs} alt='' className='w-20 mx-auto' />
                        <p>REACTJS</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                        <img src={bootstrap} alt='' className='w-20 mx-auto' />
                        <p>BOOTSTRAP</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                        <img src={tailwind} alt='' className='w-20 mx-auto' />
                        <p>TAILWIND CSS</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

import React from 'react'
import Marquee from "react-fast-marquee";
import { LuDot } from 'react-icons/lu';
import { Data } from '../data/data';


const References = () => {
  return (
    <main className='p-2 md:px-4 lg:px-8 xl:px-16 2xl:px-32 text-primary-color' id='references'>
      <h2 className='md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-3xl text-xl font-bold uppercase'>Quelques références</h2>
      <div className="mt-5 space-y-5 w-full px-4 md:px-8 lg:px-16 xl:px-16 2xl:px-32">
        {
          Data.references.map((ref, i) => (
            <div key={i}>
              <div className="w-full flex items-center gap-2 py-2">
                <LuDot size={30} className='text-red-600' />
                <h2 className="text-lg font-semibold uppercase text-red-600 max-w-max">{ref.pole}</h2>
                <div className='w-[65%] h-[0.5px] bg-red-500/50' />
              </div>
              <div className="px-4 md:px-0">
                <Marquee className='flex items-center py-2 w-full rounded-lg overflow-x-auto'>
                  {
                    ref.images.map((img, i) => (
                      <img src={img} alt="img" className='w-[100px] h-[100px] mx-2 md:mx-4 lg:mx-6 2xl:mx-10 bg-cover bg-center' key={i} />
                    ))
                  }
                </Marquee>
              </div>
            </div>
          ))
        }
      </div>
    </main>
  );
};


export default References
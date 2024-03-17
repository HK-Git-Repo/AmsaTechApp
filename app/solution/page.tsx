'use client';
import React from 'react'
import Cards from '../components/CardSolution'
import { Data, Images } from '../data/data';
import { IoIosCheckmark } from 'react-icons/io';
import Link from 'next/link';

const Solutions = () => {
  return (
    <section className='space-y-4' id='solutions'>
      <h2 className='text-3xl font-bold p-2 md:px-9 lg:px-16 xl:px-16 uppercase text-primary-color'>nos solutions</h2>
      {/* For Small Screens */}
      <div className="md:hidden flex items-center justify-center">
        <Cards />
      </div>
      {/* For Large Screens */}
      <div className="hidden md:flex md:flex-col relative p-2 md:px-9 lg:px-16 xl:px-16 h-full w-full">
        <div
          className='absolute top-0 left-0 -z-40 h-full w-full brightness-50'
        >
          <img src={Images.solution.bg} className='object-cover bg-center h-full w-full' />
        </div>
        <div className="flex flex-col space-y-4 h-full w-full">
          {
            Data.solutions.map((solution, i) => (
              <div key={i} className="flex items-center justify-evenly space-x-5 py-4 h-full w-full">
                <div className="flex flex-col items-start space-y-5 tracking-wider border px-3 py-5 rounded-3xl shadow shadow-white backdrop-blur">
                  <p className="text-xl font-semibold text-center w-full ">{solution.title}</p>
                  <ul className='text-base h-full'>
                    {
                      solution.infos.map((info, i) => (
                        <li className='ml-5 flex space-x-2 items-start' key={i}><IoIosCheckmark size={25} />{info}</li>
                      ))
                    } </ul>
                  <div className="w-full">
                    <Link href={`${solution.details_link}`} className='bg-black border-[0.5px] border-gray-700 text-white rounded-full float-right py-2 px-2.5 max-w-max text-sm font-semibold'>On s'avoir plus</Link>
                  </div>
                </div>
                <img src={solution.image}
                  className='rounded-full h-[300px] w-[300px]  object-cover bg-center shadow-xl shadow-black'
                />
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Solutions;
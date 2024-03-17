'use client';
import React from 'react';
import { Data } from '../data/data';

function CardInfo({ title, imgSRC , infos, index }: { title: string, imgSRC : string, infos: string[], index: number }) {

  return (
    <div className={`flex flex-col items-center justify-between px-3 py-10 h-full  
    ${index == 2 && 'md:col-span-2 lg:col-span-1'} 
    ${index == 0 && 'bg-gradient-to-r from-primary-black to-black rounded-bl-md border-opacity-50 border-l border-b border-primary-color'} 
    ${index == 1 && 'bg-transparent'} 
    ${index == 2 && 'bg-gradient-to-l from-primary-black to-black rounded-tr-md border-opacity-50 border-r border-t border-primary-color'} 
    `}>
      <div className='flex flex-col items-center justify-between h-full'>
        <h2 className="text-lg font-semibold uppercase text-primary-color text-center">{title}</h2>
        <img src={imgSRC} alt="icon" className='h-20 w-20' />
      </div>
      <ul className="flex flex-col justify-start text-base tracking-wide leading-8 font-semibold p-2">
        {
          infos.map((info, i) => (
            <li key={i} className='text-center w-full h-full'>{info}</li>
          ))
        }
      </ul>
    </div>
  );
}

const About = () => {

  return (
    <section
      className='px-2 md:px-9 space-y-16 lg:px-16 xl:px-16 h-full' id='about'>
      <h2 className='text-3xl font-bold uppercase text-primary-color'>pourquoi Amsa Tech ?</h2>
      <div className='h-full flex flex-col items-center justify-center'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {Data.about.map((info, i) => (
            <CardInfo key={i} index={i} title={info.title} imgSRC={info.image} infos={info.infos} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

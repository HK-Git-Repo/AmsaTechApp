'use client';
import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { Images, Data } from '../data/data';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { transition2 } from '../styles/transition';
import { FaCheckCircle } from 'react-icons/fa';


const Hero = () => (
  <>
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      transition={transition2}
      className="h-full w-full"
    >
      <div className="relative flex flex-col justify-around overflow-hidden  md:flex md:flex-row lg:flex lg:flex-row xl:flex xl:flex-row 2xl:flex 2xl:flex-row 2xl:space-x-4 items-start md:items-end lg:items-start xl:items-start">
        <ImageBackground />
        <TextZone />
        <div className="items-end justify-center  h-full w-full xl:py-20 2xl:py-16 lg:py-24 md:py-24 hidden md:flex md:px-0 lg:px-0 xl:px-0 2xl:px-0 py-28 rounded-t-full md:rounded-tl-full md:rounded-t-none md:rounded-bl-none lg:rounded-tl-none  lg:rounded-bl-full xl:rounded-bl-full 2xl:rounded-bl-full bg-gradient-to-t to-primary-color/40 from-black lg:to-primary-color/40 lg:from-black xl:from-primary-color/40 xl:to-black 2xl:from-primary-color/40 2xl:to-black ">
          <img
            className="z-40 object-cover h-auto w-auto "
            alt="Photo"
            src={Images.hero.pos}
          />
        </div>
      </div>
    </motion.div>
  </>
);

function TextZone() {
  return (
    <>
      <div
        className="px-4 w-full h-full xl:py-20 2xl:py-16 lg:py-24 md:py-20 py-28 flex flex-col justify-evenly text-white">
        <p className="font-bold leading-[50px] xl:text-[30px] md:text-[28px] sm:text-[25px] text-[20px]">
          <span className="uppercase">{Data.hero.title}</span>
        </p>
        <div className="mt-5">
          <p className="font-semibold text-[15px] sm:text-[18px] md:text-[19px] lg:text-[20px] xl:text-[22px] tracking-[0] leading-[39.4px] whitespace-nowrap">
            <Typewriter words={Data.hero.writerWords} />
          </p>
        </div>
        <div className="text-sm md:text-xl h-full space-y-8 sm:space-y-8 md:space-y-8 lg:text-xl font-medium flex flex-col  xl:flex-row 2xl:flex-row items-center sm:items-center md:items-center lg:items-center xl:items-end 2xl:items-end justify-around">
          <div className="font-medium tracking-wider text-[16px] md:text-[20px] space-y-4 mt-5 px-5 py-6 rounded-3xl h-full max-w-max flex flex-col items-start justify-center bg-black/75 shadow-md">
            {
              Data.hero.options.map((option, i) => (
                <div key={i} className="flex items-center space-x-2">
                  <FaCheckCircle size={20} className="text-red-600 rounded-full shadow-md shadow-red-300" />
                  <div className=" leading-1">
                    {option}
                  </div>
                </div>
              ))
            }
          </div>
          <Link href={'/contact-us'} className='h-full '>
            <button className='py-2 px-3 md:py-2 md:px-8 bg-black/70 rounded font-semibold text-base hover:bg-black  hover:text-white uppercase'>
              Contactez-Nous
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

function ImageBackground() {
  return (
    <div
      className="h-full w-full absolute top-0 left-0 -z-[10000] brightness-50">
      <div style={{
        backgroundImage: `url(${Images.hero.bg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '100%',
      }} />
    </div>
  );
}
export default Hero;
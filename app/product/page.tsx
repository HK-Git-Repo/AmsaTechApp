'use client';
import React, { useEffect } from 'react';
import { Data } from '../data/data';
import { motion, useAnimation } from 'framer-motion';
import { transition1 } from '../styles/transition';
import { useInView } from 'react-intersection-observer';
import Marquee from 'react-fast-marquee';

const Product = () => {
  const boxVariant = {
    visible: { opacity: 1, transition: transition1, y: 0 },
    hidden: { opacity: 0, y: '50%' }
  };

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start('visible');
    }
  }, [control, inView]);

  return (
    <section className="p-2 md:px-9 lg:px-16 xl:px-16 space-y-7" id='product'>
      <h2 className='text-3xl font-bold uppercase text-primary-color'>nos produits</h2>
      {/* Product section */}
      <div className="w-full h-full">
        <div className="w-full flex items-center py-1">
          <div className='w-full h-[1.5px] bg-gradient-to-r to-primary-color from-black' />
          <h2 className='text-lg font-semibold px-2.5 py-4 border-[0.5px] border-primary-color/50 rounded-full uppercase text-primary-color'>pos</h2>
          <div className='w-full h-[1.5px] bg-gradient-to-r from-primary-color to-black' />
        </div>
        <motion.div
          ref={ref}
          variants={boxVariant}
          initial="hidden"
          animate={control}
          className="flex flex-col justify-center items-center p-4"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8 xl:gap-10 md:w-[700px] xl:w-[1024px] sm:border-b sm:pb-3 md:border-b md:pb-3 lg:border-b  lg:pb-3 xl:border-b xl:pb-3 ">
            {Data.homeProducts.slice(0, 2).map((product, index) => (
              <div
                key={index}
                className="relative group rounded-xl  overflow-hidden primary-shadow-hover hover:scale-105 transition-transform duration-300 bg-white"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex justify-center items-center"
                >
                  <motion.img
                    initial={{ opacity: 1 }}
                    src={product.src}
                    alt={index.toString()}
                    className="object-cover h-auto w-[70%] sm:w-[75%] md:w-[80%] xl:w-[85%] "
                  />
                  <div className="absolute h-full w-full bg-black/90 text-white text-center uppercase flex flex-col items-center justify-evenly  group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <h1 className="font-dmserif text-3xl font-bold">{product.name}</h1>
                    <p className="font-dmserif text-lg font-semibold">{product.description}</p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
          <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 xl:gap-10 md:w-[700px] xl:w-[1024px]">
            {Data.homeProducts.slice(2).map((product, index) => (
              <div
                key={index}
                className="relative group rounded-xl  overflow-hidden primary-shadow-hover hover:scale-105 transition-transform duration-300 bg-white"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex justify-center items-center"
                >
                  <motion.img
                    initial={{ opacity: 1 }}
                    src={product.src}
                    alt={index.toString()}
                    className="object-cover h-auto w-[70%] sm:w-[80%] md:w-[80%] xl:w-[85%]"
                  />
                  <div className="absolute h-full w-full bg-black/90 text-white uppercase flex flex-col items-center justify-evenly text-center  group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <h1 className="font-dmserif text-3xl font-bold">{product.name}</h1>
                    <p className="font-dmserif text-lg font-semibold">{product.description}</p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      {/* Accessoirs section */}
      <div className="w-full h-full">
        <div className="w-full flex items-center py-4">
          <div className='w-full h-[1.5px] bg-gradient-to-r to-primary-color from-black' />
          <h2 className='text-lg font-semibold px-2.5 py-4 border-[0.5px] border-primary-color/50 rounded-full uppercase text-primary-color'>accessoires</h2>
          <div className='w-full h-[1.5px] bg-gradient-to-r from-primary-color to-black' />
        </div>
        <Marquee className='flex items-center py-2 w-full rounded-lg bg-white '>
          {
            Data.homeAccessoirs.map((src, i) => (
              <img src={src} alt="img" className='w-[150px] h-[150px] mx-10 bg-cover bg-center ' key={i} />
            ))
          }
        </Marquee>
      </div>
    </section>
  );
};

export default Product;

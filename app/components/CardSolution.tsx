'use client';
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Data } from '../data/data';
import Link from 'next/link';
import { BsBoxArrowUpRight } from "react-icons/bs";


const Cards = () => {

    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const handleCardClick = (index: number | null) => {
        setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
    };


    const cardVariants = {
        expanded: {
            width: "390px"
        },
        collapsed: {
            width: '300px'
        }
    }

    return (
        <section className='mb-2' >
            <div className='mt-1 sm:grid sm:grid-cols-2 sm:grid-flow-col flex flex-col w-auto md:flex md:flex-row  justify-center items-center gap-4' >
                {
                    Data.solutions.map((solution, index) => (
                        <motion.div
                            key={index}
                            className={`relative card cursor-pointer h-[450px] shadow-md shadow-black bg-cover bg-center rounded-[20px] ${index === expandedIndex ? 'expanded z-50' : 'z-0'}`}
                            variants={cardVariants}
                            initial="collapsed"
                            animate={index === expandedIndex ? 'expanded' : 'collapsed'}
                            transition={{ duration: 0.7 }}
                            onMouseEnter={() => handleCardClick(index)}
                            onMouseLeave={() => handleCardClick(null)}
                            style={{
                                backgroundImage: `url(${solution.image})`,

                            }}
                        >
                            <div className='card-content h-full flex flex-col justify-end '>
                                <div className='card-footer rounded-b-[20px] backdrop-blur-lg bg-white/60 min-h-[50px] flex flex-col items-center justify-center'>
                                    <h2 className='text-xl font-semibold text-black text-center'>{solution.title}</h2>
                                    {index === expandedIndex && (
                                        <>
                                            <Link href={solution.details_link} className="absolute top-2 right-2 p-2 rounded-full bg-black text-white"><BsBoxArrowUpRight /></Link>
                                            <ul className='mt-2 text-sky-950 font-semibold text-center '>
                                                {
                                                    solution.infos.map((info, i) => (
                                                        <li key={i}>{info}</li>
                                                    ))
                                                } </ul>
                                        </>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
            </div>
        </section>
    )
}

export default Cards
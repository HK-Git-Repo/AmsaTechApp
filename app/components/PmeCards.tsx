'use client';
import React, { useState } from 'react'
import { Data } from '../data/data';
import { AnimatePresence, motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';

const PmeCards = () => {
    const [selectedLink, setSelectedLink] = useState<string>('Ventes / Achats / Stocks');

    const handleClick = (event: any) => {
        setSelectedLink(event.target.value);
    };
    return (
        <div className="flex flex-col items-center space-y-14 p-8 text-white">
            <div className="flex items-center justify-evenly w-full md:border-b border-primary-color">
                {/* layout for small screens */}
                <div className="md:hidden text-primary-color">
                    <select
                        id="selectTab"
                        value={selectedLink}
                        onChange={handleClick}
                        className="block w-full p-2 bg-transparent border border-primary-color rounded-md shadow-md"
                    >
                        {Data.solutionDetails.PME.pmeTarifs.map((card) => (
                            <option className='bg-black max-w-max' key={card.title} value={card.title} onClick={() => setSelectedLink(card.title)}>
                                {card.title}
                            </option>
                        ))}
                    </select>
                </div>
                {Data.solutionDetails.PME.pmeTarifs.map((card) => (
                    <div key={card.title} className="hidden md:flex">
                        <h2
                            className={`hover:font-bold h-10 p-2 cursor-pointer ${selectedLink === card.title && 'font-bold text-primary-color border border-primary-color shadow-md shadow-primary-color'}`}
                            onClick={() => setSelectedLink(card.title)}
                        >
                            {card.title}
                        </h2>
                    </div>
                ))}
            </div>
            <AnimatePresence mode='wait'>
                {selectedLink && (
                    <motion.div
                        key={selectedLink}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="mt-4 "
                    >
                        {Data.solutionDetails.PME.pmeTarifs.map((card, i) => (
                            <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
                                {(card.title === selectedLink) && card.content.map((data, i) => (
                                    <div className="flex flex-col items-center bg-primary-black w-full h-full p-4 max-w-md rounded-xl shadow shadow-primary-color">
                                        <p className="text-xl my-2 uppercase text-center"> {data.title} </p>
                                        <p className="text-xl my-2 text-primary-color text-center"> {data.subtitle} </p>
                                        <ul className='w-full h-full my-2 space-y-6 flex flex-col items-center justify-center py-5'>
                                            {data.content.map((list, i) => (
                                                <li className='flex items-start gap-3 w-full h-full text-lg' key={i}><FaCheck size={20} className='mt-1 text-primary-color font-bold' /> {list} </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default PmeCards
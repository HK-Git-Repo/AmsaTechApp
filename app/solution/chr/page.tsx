import { Metadata } from 'next';
import React from 'react'
import { Data } from '../../data/data';

export const metadata: Metadata = {
    title: 'Solution CHR', 
}

interface CHR {
    title: string,
    content: string[],
    img: string
}


const Chr = () => {
    return (
        <div className='w-full h-full space-y-20'>
            {/* hero */}
            <div className="hidden md:flex items-start justify-between px-7 mt-20 w-full h-[330px] overflow-hidden bg-gradient-to-br from-[50%] to-[50%] to-black from-primary-black"
            >
                <div className="w-full h-full flex items-center justify-center">
                    <h2 className="flex items-center justify-center w-full px-3 sm:px-10 md:px-20 lg:px-32 text-center pt-5 h-full text-xl xl:text-3xl text-white">CHR</h2>
                </div>
                <div className="w-full h-full flex items-center">
                    <ul className='grid grid-cols-2 gap-3 w-full'>
                        {
                            Data.solutionDetails.CHR.options.map((option, i) => (
                                <li key={i} className={`py-3 px-1 rounded shadow shadow-primary-color ${i % 2 === 0 ? 'bg-gradient-to-r' : 'bg-gradient-to-l'}  from-black to-primary-black text-center uppercase tracking-wider text-sm font-semibold`}>{option}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <div className="flex flex-col space-y-8 md:hidden px-7 py-20 w-full h-[400px] overflow-hidden bg-gradient-to-br from-[50%] to-[50%] to-black from-primary-black"
            >
                <div className="w-full py-5 flex items-center justify-center">
                    <h2 className="text-center w-full pt-5 h-full text-xl xl:text-3xl text-white">CHR</h2>
                </div>
                <ul className='grid grid-cols-2 w-full gap-3'>
                    {
                        Data.solutionDetails.CHR.options.map((option, i) => (
                            <li key={i} className={`py-3 px-1 rounded shadow shadow-primary-color ${i % 2 === 0 ? 'bg-gradient-to-r' : 'bg-gradient-to-l'}  from-black to-primary-black text-center uppercase text-sm font-medium`}>{option}</li>
                        ))
                    }
                </ul>
            </div>
            <div className="w-full h-full px-10 space-y-16">
                {
                    Data.solutionDetails.CHR.chr_items.map((item, i) => (
                        <div className='space-y-4 md:space-y-8 max-w-[1200px]' key={i}>
                            <div className="w-full flex items-center gap-3">
                                <h2 className='text-primary-color text-lg md:text-xl uppercase font-semibold'>{item.title}</h2>
                                <div className='w-[40%] h-[1.2px] bg-gradient-to-r from-primary-color to-black' />
                            </div>
                            <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full h-full">
                                <ul
                                    className='flex flex-col items-start w-full px-6 leading-8'
                                >
                                    {
                                        item.content.map((rowContent, rowIndex) => (
                                            <li className='tracking-wider' key={rowIndex} >{rowContent}</li>
                                        ))
                                    }
                                </ul>
                                <div className='w-[50%] mb-5 md:mb-0'>
                                    <img src={item.img} alt="hero chr" className='h-full bg-cover bg-center -z-10' />
                                </div>

                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Chr
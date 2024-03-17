import RetailCard from '@/app/components/RetailCard';
import React from 'react';
import { Data, Images } from '../../data/data';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
    title: 'Solution RETAIL',
}

const Retail = () => {
    return (
        <div className='w-full h-full space-y-10 '>
            <div className="hidden md:flex items-start justify-between px-7 mt-20 w-full h-[330px] overflow-hidden bg-gradient-to-br from-[50%] to-[50%] to-black from-primary-black"
            >
                <div className="flex flex-col items-center justify-between space-x-3 py-16 text-center pt-5 h-full  ">
                    <p className='flex items-center justify-center w-full px-3 sm:px-10 md:px-20 lg:px-32 text-center pt-5 h-full text-xl xl:text-3xl text-white'>RETAIL</p>
                    <p className='capitalize text-lg xl:text-2xl text-center tracking-wide font-semibold h-full'>{Data.solutionDetails.RETAIL.description}</p>
                </div>
                <div className="w-full h-full flex items-center">
                    <ul className='grid grid-cols-2 gap-3 w-full'>
                        {
                            Data.solutionDetails.RETAIL.options.map((option, i) => (
                                <li key={i} className={`py-3 px-1 rounded shadow shadow-primary-color ${i % 2 === 0 ? 'bg-gradient-to-r' : 'bg-gradient-to-l'}  from-black to-primary-black text-center uppercase tracking-wider text-sm font-semibold`}>{option}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>

            <div className="flex flex-col space-y-5 md:hidden px-7 py-14 w-full h-[480px] overflow-hidden bg-gradient-to-br from-[50%] to-[50%] to-black from-primary-black"
            >
                <div className="w-full flex flex-col items-center justify-center py-5">
                    <h2 className="text-center w-full pt-5 h-full text-xl xl:text-3xl text-white">RETAIL</h2>
                    <p className='capitalize text-lg xl:text-2xl text-center tracking-wide font-semibold h-full'>{Data.solutionDetails.RETAIL.description}</p>
                </div>
                <ul className='grid grid-cols-2 w-full gap-3'>
                    {
                        Data.solutionDetails.RETAIL.options.map((option, i) => (
                            <li key={i} className={`py-3 px-1 rounded shadow shadow-primary-color ${i % 2 === 0 ? 'bg-gradient-to-r' : 'bg-gradient-to-l'}  from-black to-primary-black text-center uppercase text-sm font-medium`}>{option}</li>
                        ))
                    }
                </ul>
            </div>

            <div className="w-full h-full flex flex-col items-center justify-center px-4 md:px-8 lg:px-16 xl:px-32 space-y-20">

                <div className="w-full h-full space-y-10">
                    <h2 className="text-2xl tracking-wide font-semibold uppercase my-5 text-center">Logiciel de caisse pour <span className='text-blue-400' >les commerces de détail et les commerces spécialisés</span></h2>
                    <div className="w-full h-full flex flex-col lg:flex-row items-center justify-around bg-white rounded-3xl border border-blue-400 blue-shadow overflow-hidden">
                        <div className="flex items-center justify-center py-14 md:py-14 relative w-full h-full">
                            <img src={Data.solutionDetails.RETAIL.software.softwareImage} alt="lineosoft" className='px-12 md:px-20 lg:px-32 h-full' />
                        </div>
                        <div className="p-4 w-full h-full tracking-wider text-lg bg-black text-white">
                            <span className='font-semibold text-blue-400'> {Data.solutionDetails.RETAIL.software.softwareName} </span> : <br />
                            <ul className="pl-5 border-l border-gray-400">
                                {
                                    Data.solutionDetails.RETAIL.software.softwareDescription.map((info, i) => (
                                        <li key={i} className='flex w-full'>{'° '}<p className='ml-2'> {info} </p></li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="w-full h-full space-y-10">
                    <h2 className="text-2xl tracking-wide font-semibold uppercase my-5">les points forts de notre solution</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                        {
                            Data.solutionDetails.RETAIL.avantages.map((card, index) => (
                                <RetailCard key={index} icon={card.icon} title={card.title} content={card.content} />
                            ))
                        }
                    </div>
                </div>

                <div className="w-full h-full space-y-10">
                    <h2 className="text-2xl tracking-wide font-semibold uppercase my-5">Les fonctionnalités avancées</h2>
                    <div
                        style={{
                            backgroundImage: `url(${Images.solution.retail_lastSection})`
                        }}
                        className="w-full  bg-cover bg-bottom flex flex-col lg:flex-row justify-between"
                    >
                        {/* Background Image */}
                        <div className='w-full h-full' />
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 p-4 float-right h-full">
                            {
                                Data.solutionDetails.RETAIL.advancedFunctions.map((card, index) => (
                                    <div key={index} className="backdrop-blur text-white bg-blue-800/20 p-4 flex flex-col items-start">
                                        <div className="flex items-center mb-4">
                                            <div className="mr-4 font-bold text-xl"> {card.icon} </div>
                                            <h2 className="text-xl font-bold"> {card.title} </h2>
                                        </div>
                                        <p className="flex items-center justify-center border-t border-white pt-4 tracking-wide text-lg w-full h-full"> {card.content} </p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Retail;

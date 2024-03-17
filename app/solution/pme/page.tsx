import React from 'react'
import { Data } from '../../data/data';
import PmeCards from '@/app/components/PmeCards';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Solution PME', 
}

const Pme = () => {

    return (
        <div className='w-full h-full space-y-10 text-white'>
            {/* hero */}
            <div className="flex items-center justify-center"
                style={{
                    backgroundImage: `url(${Data.solutionDetails.PME.hero.bg})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    height: '570px'
                }}
            >
                <div className="bg-gradient-to-tl from-black/60 from-50% to-50% to-black/40 h-full w-full flex flex-col md:flex-row items-center justify-evenly">
                    <div className='mt-16 flex items-center justify-center w-full h-full'>
                        <p className='px-10 py-12 md:px-32 md:py-36 rounded-full bg-black/60 text-lg md:text-2xl font-semibold tracking-wider'>PME</p>
                    </div>
                    <div className='p-2 flex items-center justify-center w-full h-full'>
                        <p className='capitalize text-base md:text-xl tracking-wide leading-9'>{Data.solutionDetails.PME.hero.description}</p>
                    </div>
                </div>
            </div>
            <div className="w-full h-full space-y-10 px-3 py-2">
                {/* Section 1 */}
                <div className="w-full flex flex-col items-center space-y-10">
                    <h2 className="text-2xl tracking-wide text-center font-semibold uppercase mt-5">Les logiciels de <span className="text-primary-color font-semibold">gestion commerciale EBP Maroc</span></h2>
                    <div className="flex flex-col md:flex-row item-start space-x-3 space-y-3 w-full h-full px-5 md:px-16 py-5">
                        <p className='tracking-wide leading-10 text-lg'>
                            {Data.solutionDetails.PME.firstSection.text}
                        </p>
                        <img src={Data.solutionDetails.PME.firstSection.image} alt="section1" className='md:w-1/2 h-full bg-cover bg-center rounded-md' />
                    </div>
                </div>
                {/* Section 2 */}
                <PmeCards/>
                {/* Section 3 */}
                <div className="w-full flex flex-col items-center space-y-10">
                    <h2 className="text-2xl tracking-wide font-semibold text-center uppercase mt-5">Maîtrisez et optimisez votre gestion commerciale</h2>
                    <div className="flex flex-col md:flex-row item-start space-x-3 space-y-3 w-full h-full px-5 md:px-16 py-5">
                        <p className='tracking-wide leading-[50px] h-full text-lg'>
                            {Data.solutionDetails.PME.lastSection.text}
                        </p>
                        <img src={Data.solutionDetails.PME.lastSection.image} alt="section3" className='md:w-1/2 h-full bg-cover bg-center rounded-md' />
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Pme
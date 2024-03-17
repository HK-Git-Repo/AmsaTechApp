import {
  AiOutlineWhatsApp,
} from 'react-icons/ai';
import { CiFacebook, CiLocationOn } from 'react-icons/ci';
import { FormContact } from '../components/FormContact';
import { FaInstagram } from 'react-icons/fa';
import { Metadata } from 'next';
import { ContactCoords, ContactLinks } from '../data/data';

export const metadata: Metadata = {
  title: 'Contact',
}

const Contact = () => {
  return (
    <div className="w-full h-full  p-10 lg:px-20 lg:py-10 space-y-16 flex flex-col items-center text-white">
      <div className="mt-16 w-full h-full space-y-5">
        <h1 className="text-2xl font-semibold text-primary-color capitalize">Entrer en contact</h1>
        <div className="w-full flex flex-col md:flex-row gap-3 justify-between">
          <div className="w-full h-full space-y-14">
            <div className="space-y-5">
              <div className='py-4 pr-16 pl-5 bg-primary-color rounded'>
                <p className='text-base font-semibold text-black uppercase my-1'>Email</p>
                <p className="text-white font-semibold cursor-pointer">
                  { ContactCoords.email }
                </p>
              </div>
              <div className='py-4 pr-16 pl-5 bg-primary-color rounded'>
                <p className='text-base font-semibold text-black uppercase my-1'>Tél</p>
                <ul>
                  <li><a href={ContactLinks.GSM} className="text-white font-semibold">GSM : {ContactCoords.GSM}</a></li>
                  <li><a href={ContactLinks.phone} className="text-white font-semibold">TEL : {ContactCoords.Fix}</a></li>
                </ul>
              </div>
            </div>
            <SocialNetwork />
          </div>
          <div className="w-full">
            <FormContact />
          </div>
        </div>
      </div>
      <MapsLocation />
    </div>
  );
};

const MapsLocation = () => {
  return <div className="w-full h-full space-y-6">
    <p className="text-2xl font-semibold text-primary-color capitalize">Localisation</p>
    <div className="flex items-center p-3 rounded-full space-x-2 bg-primary-black max-w-max">
      <CiLocationOn size={25} />
      <p className="text-white text-lg tracking-wider indent-1"> {ContactCoords.address} </p>
    </div>
    { ContactCoords.locationFromGoogleMap }
  </div>
}

function SocialNetwork() {
  return <div className="my-4">
    <p className='text-primary-color'>Connectez-vous avec nous :</p>
    <div className="flex gap-6 my-3 ml-8">
      <a href={ContactLinks.whatsapp} className="text-green-500 hover:scale-125 transition-transform duration-300 ease-in-out">
        <AiOutlineWhatsApp className='hover:rotate-[360deg] transform rotate-0 transition-transform duration-[1000ms]' size={30} />
      </a>
      <a href={ContactLinks.instagram} className="text-pink-600 hover:scale-125 transition-transform duration-300 ease-in-out">
        <FaInstagram className='hover:rotate-[360deg] transform rotate-0 transition-transform duration-[1000ms]' size={30} />
      </a>
      <a href={ContactLinks.facebook} className=" text-blue-900 hover:scale-125 transition-transform duration-300 ease-in-out">
        <CiFacebook className='hover:rotate-[360deg] transform rotate-0 transition-transform duration-[1000ms]' size={30} />
      </a>
    </div>
  </div>;
}

export default Contact;

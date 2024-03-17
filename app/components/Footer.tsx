import Link from "next/link";
import React from "react";
import { AiFillPhone } from "react-icons/ai";
import { FaFacebook, FaInstagram, FaMapMarkedAlt, FaWpforms } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { ContactCoords, Images } from "../data/data";

function Footer() {
  return (
    <footer className=" text-white"
      style={{
        backgroundImage: `url(${Images.footer.bg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}
    >
      <div className="pb-5 bg-black/50 backdrop-blur-sm h-full w-full">
        <div className="h-auto w-full flex md:flex-row lg:flex-row xl:flex-row flex-col justify-around items-start md:items-start lg:items-start xl:items-start mt-16 p-2">
          <div className="p-5 w-full">
            <Link href={'/'}>
              <img
                src={Images.logo}
                alt="Logo"
                className="cursor-pointer h-[55px] bg-cover bg-center "
              />
            </Link>
          </div>
          <div className="p-5 w-full">
            <ul>
              <p className="font-bold text-lg lg:text-2xl pb-4 uppercase">Contactez Nous</p>
              <li className=" py-2 font-base">
                <p className="flex items-center gap-3 "><MdEmail size={22} />{ContactCoords.email}</p>
              </li>
              <li className=" py-2 font-base">
                <p className="flex items-center gap-3"><AiFillPhone size={22} />{ContactCoords.Fix}</p>
              </li>
              <li className="py-4 font-base hover:underline cursor-pointer max-w-max">
                <Link href={'/contact-us'} className="capitalize font-semibold rounded px-3 py-2 text-lg border text-white bg-black flex items-center justify-center gap-3"><FaWpforms size={22} /> Formulaire En ligne</Link>
              </li>
            </ul>
          </div>
          <div className="p-5 w-full">
            <p className="font-bold text-lg lg:text-2xl pb-4 uppercase">Adresse</p>
            <p className="flex items-center gap-3 text-lg lg:text-xl"><FaMapMarkedAlt size={22} />{ContactCoords.address}</p>
          </div>
        </div>
        <div className=" text-lg font-semibold mb-20  flex flex-col md:flex-row items-center justify-around px-1 h-auto w-full py-5">
          <h1>
            © 2023 AmsaTech - Tous droits réservés - All rights reserved
          </h1>
          <div className="flex justify-center gap-10">
            <a href="https://www.instagram.com/amsa_tech?igsh=dnAyZ2d4ZnE2MDMz"><FaInstagram className="text-2xl cursor-pointer hover:text-yellow-600" size={30} /></a>
            <a href="https://www.facebook.com/AMSATECHMAROC?mibextid=vk8aRt"><FaFacebook className="text-2xl cursor-pointer hover:text-blue-800" size={30} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
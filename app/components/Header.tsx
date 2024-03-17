"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  AiFillPhone,
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { CiFacebook, CiInstagram } from "react-icons/ci";
import NavBar, { ComponentType } from "./NavBar";
import { MdEmail } from "react-icons/md";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { ContactCoords, ContactLinks, Images } from "../data/data";


const Header = (): JSX.Element => {
  const [nav, setNav] = useState<boolean>(false);
  const [logo, setLogo] = useState<boolean>(true);
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);

  const route = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);


  const handleNavBar = () => {
    setNav(!nav);
    setLogo(!logo);
  };

  return (
    <header className={`bg-black ${prevScrollPos === 0 ? 'w-full' : ''}`}>
      <div className="bg-primary-black px-4 sm:px-6 lg:px-8 py-2 text-white text-base flex flex-col sm:flex-row items-center justify-between">
        <div className="flex justify-center gap-4 sm:gap-6 text-sm font-base mb-2 sm:mb-0">
          <a href={ContactLinks.instagram}><FaInstagram className="text-xl cursor-pointer hover:text-yellow-600" /></a>
          <a href={ContactLinks.facebook}><FaFacebook className="text-xl cursor-pointer hover:text-blue-800" /></a>
        </div>
        <div className="flex flex-col sm:flex-row items-center text-sm sm:text-base">
          <div className="mb-2 sm:mb-0">
            <a href={ContactLinks.phone} className="underline flex items-center gap-2 sm:gap-3 mr-2" ><AiFillPhone size={22} />{ContactCoords.Fix}</a>
          </div>
          <div className="sm:hidden">
            <hr className="w-4 mx-2 border-t border-white" />
          </div>
          <div className="hidden sm:flex">
            <span className="text-white mx-2">|</span>
          </div>
          <div>
            <a target="_blank" rel="noopener noreferrer" className="underline flex items-center gap-2 sm:gap-3 ml-2" href={ContactLinks.mail}>
              <MdEmail size={22} />{ ContactCoords.email }
            </a>
          </div>
        </div>
      </div>
      <div className="w-full  mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center transition-transform duration-600 ease-in-out h-16">
        {
          prevScrollPos === 0 ? <NavOnTop logo={logo} nav={nav} handleNavBar={handleNavBar} /> :
            <NavOnBottom />
        }
        <div className={`fixed max-w-[400px] backdrop-blur-lg bg-white/30 ${!nav
          ? " -left-full"
          : " top-0 left-0 w-full h-full border-r text-black border-r-slate-800 ease-in-out duration-500"
          }`}>
          <div
            onClick={handleNavBar}
            className="float-right mr-2 mt-2 p-1 cursor-pointer hover:bg-gray-400 rounded-full"
          >
            <AiOutlineClose size={20} />
          </div>
          <div className="flex flex-col items-center space-y-10 h-full mt-3">
            <NavBar closeSideBar={()=> handleNavBar()} componentType={ComponentType.SIDE_BAR} textColor="text-black" />
            <div className="h-full w-full flex flex-col items-center space-y-5">
              <LogoLink />
              {
                route !== '/contact-us' && <div className="flex items-center justify-center gap-4">
                  <Link
                    href={ContactLinks.facebook}
                    className="hover:scale-125 transition-transform duration-300 ease-in-out"
                  >
                    <CiFacebook size={27} />
                  </Link>
                  <Link
                    href={ContactLinks.instagram}
                    className="hover:scale-125 transition-transform duration-300 ease-in-out"
                  >
                    <CiInstagram size={27} />
                  </Link>
                  <Link
                    href={ContactLinks.whatsapp}
                    className="hover:scale-125 transition-transform duration-300 ease-in-out"
                  >
                    <AiOutlineWhatsApp size={27} />
                  </Link>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

function LogoLink() {
  return <Link href={"/"}>
    <img
      src={Images.logo}
      alt="Logo"
      className="cursor-pointer h-[55px] bg-cover bg-center"
    />
  </Link>;
}

function NavOnTop({ logo = true, nav = true, handleNavBar = () => { } }) {
  return <>
    {logo && (<LogoLink />)}
    <div className="hidden md:flex rounded-full bg-transparent">
      <NavBar />
    </div>
    <div
      onClick={handleNavBar}
      className="block md:hidden cursor-pointer p-1 hover:bg-gray-400 rounded-full"
    >
      {!nav ? <AiOutlineMenu size={20} /> : null}
    </div>
  </>;
}

function NavOnBottom() {
  return <>
    <div className="fixed bottom-2 left-1/2 transform -translate-x-1/2 z-50 hidden md:block">
      <NavBar textColor="text-black" activeTextColor="text-white" style="backdrop-filter-lg filter-[123px] bg-primary-color/70 rounded-full" />
    </div>
  </>;
}


export default Header;

'use client';
import React, { useState, useEffect } from 'react';
import { IoIosArrowUp } from 'react-icons/io';

const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',      
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`${
        isVisible ? 'block z-[9999]' : 'hidden'
      } fixed bottom-4 right-4 bg-white p-2 border border-solid shadow-lg rounded-full cursor-pointer hover:bg-gray-400 transition-all duration-300`}
      onClick={scrollToTop}
    >
      <IoIosArrowUp className="text-black text-xl" />
    </div>
  );
};

export default BackToTopButton;

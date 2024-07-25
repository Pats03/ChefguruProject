import React, { useState, useEffect } from 'react';
import { Banner1, Banner2, Banner3, Banner4, Banner5 } from '../images';
import Button from './Button';
import TryNowButton from './TryNowButton';

const images = [Banner1, Banner2, Banner3, Banner4, Banner5];

const Header = ({ titles, image, type }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const textInterval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 1000); // Change text every 3 seconds

    return () => clearInterval(textInterval);
  }, [titles.length]);

  return (
    <div className="w-full h-[100vh]">
      <div className="relative w-full h-full">
        <img
          src={image ?? images[Math.floor(Math.random() * images.length)]}
          alt="Hero Image"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute w-full h-full bg-gradient-to-t from-black to-transparent top-0 z-8 flex flex-col items-center justify-center pt-40 2xl:pt-20 px-4 ">
        <TryNowButton />
        <h1 className="text-white text-4xl md:text-5xl font-bold text-center">
          {titles[currentTextIndex]}
        </h1>
        {type && (
          <p className="text-sm mt-4 text-center text-green-500 bg-[#00000090] px-6 py-4 rounded-full ">
            Welcome to ChefGuru, your passport to culinary adventures!
            <br className="hidden md:block" /> Discover a treasure trove of
            delectable recipes from around the globe.
          </p>
        )}
      </div>
    </div>
  );
};

export default Header;

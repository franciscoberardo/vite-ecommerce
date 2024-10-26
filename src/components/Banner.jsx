// src/components/Banner.jsx
import React, { useRef } from 'react';
import useOnScreen from '../hooks/useOnScreen'; // Importa el hook

const Banner = ({ imageLeft, imageRight }) => {
  const bannerRef = useRef(); // Referencia al Banner
  const bannerVisible = useOnScreen(bannerRef); // Detecta si está visible

  return (
    <div
      ref={bannerRef} // Asociar la referencia al div del banner
      className={`w-full transition-opacity duration-[1500ms] ease-out ${bannerVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="flex flex-row justify-center items-center w-[80%] mx-auto h-48 gap-x-4">
        <div className="w-1/2 h-full overflow-hidden">
          <img
            src={imageLeft}
            alt="Left Image"
            className="object-cover w-full h-full transform transition-transform duration-300 hover:scale-110"
          />
        </div>
        <div className="w-1/2 h-full overflow-hidden">
          <img
            src={imageRight}
            alt="Right Image"
            className="object-cover w-full h-full transform transition-transform duration-300 hover:scale-110"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;

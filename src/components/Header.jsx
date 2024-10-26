import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import wall from "../assets/images/wal.png";
import { useTranslation } from "react-i18next";

const Header = ({ contactRef }) => { // Recibe la referencia como prop
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleScrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header id="home" className="relative">
      <div className="h-[60vh] sm:h-[75vh] bg-primary">
        <div className="relative h-full flex items-center justify-center animate-fadeIn">
          <img
            src={wall}
            alt="Imagen principal"
            className="w-full h-full object-cover rounded-lg mx-4"
          />
          <div className="absolute z-10 w-full sm:w-1/2 h-full left-0 flex items-center justify-center px-4 sm:px-6">
            <div className="text-black text-center animate-slideUp">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4 font-rajdhani">
                {t("Header.title")}
              </h1>
              <div className="space-x-2 sm:space-x-4">
                <button
                  className="bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-500
                    hover:from-blue-600 hover:to-red-600 text-white font-bold py-2 px-4 rounded font-rajdhani 
                    transition-transform duration-300 transform hover:scale-105"
                  onClick={() => navigate("/products")}
                >
                  {t("Header.findButton")}
                </button>
                <button
                  className="bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-500
                    hover:from-blue-600 hover:to-red-600 text-white font-bold py-2 px-4 rounded font-rajdhani 
                    transition-transform duration-300 transform hover:scale-105"
                  onClick={handleScrollToContact} // Cambia aquí
                >
                  {t("Header.askButton")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 mx-auto w-[90vw] max-w-7xl p-2 sm:p-4 z-20">
        <div className="flex space-x-4"></div>
      </div>
    </header>
  );
};

export default Header;

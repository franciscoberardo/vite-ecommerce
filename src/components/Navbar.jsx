import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "../assets/images/logo.png";
import LanguageToggle from "./LanguageToggle";
import CartIcon from "./CartIcon";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const handleCartClick = () => {
    navigate("/cart");
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  const toggleLanguage = () => {
    const newLang = currentLanguage === "es" ? "en" : "es";
    i18n.changeLanguage(newLang);
  };

  return (
    <nav className="w-full bg-primary shadow-lg z-20 text-lg sm:text-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Toggle de idioma */}
          <div className="flex items-center">
            <LanguageToggle 
              toggleLanguage={toggleLanguage} 
              currentLanguage={currentLanguage} 
            />
          </div>

          {/* Logo centrado */}
          <div className="flex-grow flex items-center justify-center">
            <img
              src={logo}
              alt="Logo"
              className="h-10 sm:h-14 lg:h-16 cursor-pointer"
              onClick={handleLogoClick}
            />
          </div>

          {/* Icono del carrito */}
          <div className="flex items-center space-x-4">
            <CartIcon 
              cartLength={cart.length} 
              onClick={handleCartClick} 
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import { useTranslation } from "react-i18next";
import flagEs from "../assets/images/es.png";
import flagEn from "../assets/images/en.png";

const LanguageToggle = ({ toggleLanguage, currentLanguage }) => {
  return (
    <button
      onClick={toggleLanguage}
      className="relative inline-flex items-center h-6 w-10 sm:w-12 rounded-full transition-colors focus:outline-none bg-textPrimary"
    >
      <span className="sr-only">Toggle Language</span>
      <span
        className={`${
          currentLanguage === "es" ? "translate-x-0" : "translate-x-5"
        } inline-block w-4 h-4 transform rounded-full transition-transform`}
      />
      <img
        src={currentLanguage === "es" ? flagEs : flagEn}
        alt={currentLanguage === "es" ? "Español" : "English"}
        className={`${
          currentLanguage === "es" ? "absolute left-1" : "absolute right-1"
        } w-4 h-4 rounded-full`}
      />
    </button>
  );
};

export default LanguageToggle;

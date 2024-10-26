import React from "react";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import logo from "../assets/images/logo.png";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaThumbsUp } from "react-icons/fa";
import { HiClipboardList } from "react-icons/hi";
import { TbBox } from "react-icons/tb";

const Footer2 = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  // Maneja el clic en el logo para redirigir a la página de inicio
  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <footer className="bg-button p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-4 sm:mx-16 p-4 text-black bg-product">
        <div className="flex flex-col items-center p-4">
          <div className="text-4xl">
            <FaThumbsUp />
          </div>
          <h2 className="mt-2 text-xl">{t("Footer.exceptionalQuality")}</h2>
          <p className="mt-2 text-black">{t("Footer.qualityText")}</p>
        </div>
        <div className="flex flex-col items-center p-4">
          <div className="text-4xl">
            <TbBox />
          </div>
          <h2 className="mt-2 text-xl">{t("Footer.freeWorldwideShipping")}</h2>
          <p className="mt-2">{t("Footer.shippingText")}</p>
        </div>
        <div className="flex flex-col items-center p-4">
          <div className="text-4xl">
            <HiClipboardList />
          </div>
          <h2 className="mt-2 text-xl">{t("Footer.easyInstallation")}</h2>
          <p className="mt-2 text-gray-600">{t("Footer.installationText")}</p>
        </div>
      </div>
      <div className="mx-auto w-80vh h-[5px] bg-red-500 rounded-full my-4"></div>

      <div className="container mx-auto flex justify-between items-center">
        {/* Sección de enlaces legales a la izquierda */}
        <div className="flex space-x-6">
          <img
            src={logo}
            alt="Antafex Logo"
            className="h-12 cursor-pointer"
            onClick={handleLogoClick}
          />
        </div>

        {/* Derechos de autor a la izquierda */}
        <div className="text-left text-sm text-gray-500">
          <p>&copy; 2024 PrinterAll. All rights reserved.</p>
        </div>

        {/* Sección de logo y redes sociales a la derecha */}
        <div className="flex space-x-6 items-center">
          {/* Logo */}

          <a
            href="/privacy-policy"
            className="text-gray-500 hover:text-gray-700"
          >
            Privacy Policy
          </a>
          <a href="/terms" className="text-gray-500 hover:text-gray-700">
            Terms of Service
          </a>

          {/* Redes sociales */}
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              className="text-gray-500 hover:text-gray-700"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              className="text-gray-500 hover:text-gray-700"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://youtube.com"
              aria-label="YouTube"
              className="text-gray-500 hover:text-gray-700"
            >
              <FaYoutube size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;

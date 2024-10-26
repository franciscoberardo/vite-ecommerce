// ProductCard.js
import React from "react";
import { FaShoppingCart, FaFire, FaMedal, FaStar } from "react-icons/fa";
import { useTranslationContext } from "./TranslationContext";


const ProductCard = ({ product, onAddToCart, darkMode }) => {
  const { t } = useTranslationContext();

  return (
    <div
      className={`relative group p-4 shadow-lg hover:shadow-2xl transition-shadow duration-300 ${
        darkMode ? "bg-secondary2 border-gray-600" : "bg-secondary2 border-gray-600"
      }`}
    >
      {product.sale_price || product.tag ? (
        <div
          className={`absolute top-2 left-2 text-white text-xs px-2 py-1 rounded-sm ${
            product.sale_price
              ? "bg-red-500"
              : product.tag === "NEW IN"
              ? "bg-green-500"
              : product.tag === "TOP"
              ? "bg-blue-500"
              : "bg-blue-500" // Color por defecto
          }`}
        >
          {product.sale_price ? (
            <span className="inline-flex items-center">
              HOT
              <FaFire className="ml-1 text-white" />
            </span>
          ) : (
            <span className="inline-flex items-center">
              {product.tag === "TOP" && (
                <>
                  TOP <FaMedal className="ml-1 text-white" />
                </>
              )}
              {product.tag === "NEW IN" && (
                <>
                  {product.tag} <FaStar className="ml-1 text-white" />
                </>
              )}
            </span>
          )}
        </div>
      ) : null}

      <div className="flex flex-col rounded-lg">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-52 object-cover mb-2 rounded-lg" // Ajusta la altura aquí si es necesario
        />
        <div className="text-left">
          <h2
            className={`text-md font-maiden capitalize transition-colors duration-300 ${
              darkMode ? "text-black" : "text-gray-800"
            }`}
          >
            {product.name}
          </h2>
        </div>
        <div className="text-left my-1">
          <h1
            className={`text-md font-bold transition-colors duration-300 ${
              darkMode ? "text-black" : "text-gray-800"
            }`}
          >
            {product.sale_price ? (
              <>
                <span className="line-through mr-2">${product.price}</span>
                <span className="text-red-500">${product.sale_price}</span>
              </>
            ) : (
              <span>${product.price}</span>
            )}
          </h1>
        </div>
      </div>
      
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button 
          onClick={() => onAddToCart(product)}
                  className="absolute bottom-1 right-1 bg-blue-500 text-white p-2 rounded-full flex items-center"
                >
                  <FaShoppingCart className="mr-1" />
                  {t("ProductList.addToCart")}
                </button>
              </div>
    </div>
  );
};

export default ProductCard;

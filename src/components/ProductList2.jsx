import React, { useEffect, useState, useRef, useContext } from "react";
import { useTheme } from "./ThemeContext";
import { CartContext } from "./CartContext";
import { useTranslationContext } from "./TranslationContext";
import { useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";
import Popup from "./Popup";

const ProductList2 = ({ title, fetchUrl }) => {
  const { t } = useTranslationContext();
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [popupVisible, setPopupVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const { darkMode } = useTheme();
  const ref = useRef(null);
  const { addToCart } = useContext(CartContext);

  const handleAllProductsClick = () => {
    navigate("/products");
  };

  useEffect(() => {
    fetch(fetchUrl)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, [fetchUrl]);

  const handleAddToCart = (product) => {
    addToCart(product);
    setSelectedProduct(product);
    setPopupVisible(true);
    setTimeout(() => {
      setPopupVisible(false);
    }, 3000);
  };

  return (
    <div
      ref={ref}
      id="products"
      className="container mx-auto mt-4 transition-colors duration-300 bg-primary border-gray-700"
    >
      <h1 className="bg-button text-center mb-6 text-2xl font-bold transition-colors duration-300 font-rajdhani text-black">
        {title}
      </h1>

      {popupVisible && selectedProduct && (
        <Popup
          product={selectedProduct}
          visible={popupVisible}
          message={t("ProductList.successfullyAdded")}
        />
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto w-[80vw]">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id}>
              <ProductCard
                product={product}
                onAddToCart={handleAddToCart}
                darkMode={darkMode}
              />
            </div>
          ))
        ) : (
          <div className="col-span-full text-center">
            <p>Cargando imágenes de productos...</p>
          </div>
        )}
      </div>

      <div className="flex justify-center mt-8">
        <button
          onClick={handleAllProductsClick}
          className="text-white bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 hover:from-blue-600 hover:to-red-600 focus:outline-none py-1 px-4 rounded-full shadow-lg font-semibold text-lg transition-transform duration-300 transform hover:scale-105"
        >
          {t("ProductList.seeMore")}
        </button>
      </div>
    </div>
  );
};

export default ProductList2;

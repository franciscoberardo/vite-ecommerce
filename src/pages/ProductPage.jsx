import React, { useEffect, useState, useContext } from "react";
import { useTheme } from "../components/ThemeContext";
import { CartContext } from "../components/CartContext";
import { useTranslationContext } from "../components/TranslationContext";
import ProductCard from "../components/ProductCard";
import CategoryFilter from "../components/CategoryFilter";
import Popup from "../components/Popup";

const ProductPage = ({ title }) => {
  const { t } = useTranslationContext();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [popupVisible, setPopupVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { darkMode } = useTheme();
  const { addToCart } = useContext(CartContext);

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/categories`)
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  useEffect(() => {
    const categoryQuery = selectedCategory ? selectedCategory : "";
    fetch(`${import.meta.env.VITE_API_URL}/products/${categoryQuery}`)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, [selectedCategory]);

  const handleAddToCart = (product) => {
    addToCart(product);
    setSelectedProduct(product);
    setPopupVisible(true);
  };

  const handleClosePopup = () => setPopupVisible(false);

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    setCurrentPage(1);
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(products.length / productsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div id="products" className="container mx-auto mt-4 transition-colors duration-300 bg-primary border-gray-700 relative">
      <Popup
        product={selectedProduct}
        visible={popupVisible}
        message={t("ProductList.successfullyAdded")}
        onClose={handleClosePopup}
      />

      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />

      <div className="flex mx-auto w-[80vw]">
        <div className="flex flex-wrap justify-center">
          {currentProducts.map((product) => (
            <div className="w-1/4 p-2" key={product.id}>
              <ProductCard
                product={product}
                onAddToCart={handleAddToCart}
                darkMode={darkMode}
              />
            </div>
          ))}
        </div>
      </div>

      {selectedCategory === null && (
        <div className="flex justify-center my-4">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`mx-1 px-4 py-2 rounded-lg ${
                currentPage === index + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductPage;

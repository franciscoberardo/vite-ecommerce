import React, { useEffect, useState, useRef, useContext } from "react";
import { useTheme } from "./ThemeContext"; // Importar el contexto del tema
import { FaShoppingCart } from "react-icons/fa"; // Importar el ícono de carrito
import { CartContext } from "./CartContext"; // Importar el contexto del carrito
import { useTranslationContext } from "./TranslationContext";
import foto11 from "../assets/images/astre2.png";

const ProductList = ({ title }) => {
  const { t } = useTranslationContext(); // Para las traducciones
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]); // Almacenar las categorías
  const [selectedCategory, setSelectedCategory] = useState(null); // Almacenar una sola categoría seleccionada
  const [isVisible, setIsVisible] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { darkMode } = useTheme(); // Obtener el estado del modo oscuro
  const ref = useRef(null);
  const { addToCart } = useContext(CartContext);

  // Obtener las categorías al montar el componente
  useEffect(() => {
    fetch("http://localhost:3000/api/categories")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  // Obtener los productos según la categoría seleccionada
  useEffect(() => {
    const categoryQuery = selectedCategory ? selectedCategory : "";

    fetch(`http://localhost:3000/api/products/${categoryQuery}`)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setIsVisible(true); // Mostrar productos una vez que los datos están cargados
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, [selectedCategory]);

  const handleAddToCart = (product) => {
    addToCart(product);
    setSelectedProduct(product);
    setPopupVisible(true);
    setTimeout(() => {
      setPopupVisible(false);
    }, 3000);
  };

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId); // Solo una categoría seleccionada
  };

  return (
    <div
      ref={ref}
      id="products"
      className=" mt-4 w-11/12 transition-colors duration-300 bg-primaryDark border-gray-700 text-black"
    >
      <div className="relative w-screen flex items-center">
        <img
          src={foto11}
          alt="Imagen principal"
          className="w-full h-52 object-cover rounded-lg"
        />
      </div>
      <h1 className="text-center mb-6 text-2xl font-bold transition-colors duration-300 font-rajdhani text-black"></h1>

      {/* Layout en dos columnas */}
      <div className="flex">
        {/* Filtro de categorías */}
        {/* Filtro de categorías */}
<div className="mx-8 w-1/4 flex flex-col justify-center items-start text-left h-full p-4 bg-gray-100 rounded-lg shadow-md">
  <h2 className="text-lg font-bold mb-4 text-gray-700">
    {t("ProductList.filterByCategory")}
  </h2>
  <div className="flex flex-col justify-center flex-grow">
    {/* Opción "Mostrar todos" */}
    <div className="mb-3 flex items-center">
      <input
        type="radio"
        id="all"
        name="category"
        checked={selectedCategory === null} // Selecciona si la categoría es null
        onChange={() => handleCategoryChange(null)} // Setea la categoría a null para mostrar todos los productos
        className="h-4 w-4 bg-white border-gray-300 rounded-none focus:ring-blue-500"
      />
      <label htmlFor="all" className="ml-3 text-gray-600">
        {t("ProductList.showAll")} {/* Traducir "Mostrar todos" */}
      </label>
    </div>

    {/* Mostrar categorías dinámicas */}
    {categories.length > 0 ? (
      categories.map((category) => (
        <div key={category.id} className="mb-3 flex items-center">
          <input
            type="radio"
            id={category.id}
            name="category"
            checked={selectedCategory === category.id}
            onChange={() => handleCategoryChange(category.id)}
            className="h-4 w-4 bg-white border-gray-300 rounded-none focus:ring-blue-500"
          />
          <label htmlFor={category.id} className="ml-3 text-gray-600">
            {category.name}
          </label>
        </div>
      ))
    ) : (
      <p>{t("ProductList.loadingCategories")}</p>
    )}
  </div>
</div>


        {/* Grid de productos */}
        <div className="w-4/5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.length > 0 ? (
            products.map((product) => (
              <div
                key={product.id}
                className={`relative group p-2 shadow-lg hover:shadow-2xl transition-shadow duration-300 ${
                  darkMode
                    ? "bg-secondary2 border-gray-600"
                    : "bg-secondary2 border-gray-600"
                }`}
              >
                <div className="flex flex-col h-full rounded-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-52 object-cover mb-2 rounded-lg"
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
                          <span className="line-through mr-2">
                            ${product.price}
                          </span>
                          <span className="text-red-500">
                            ${product.sale_price}
                          </span>
                        </>
                      ) : (
                        <span>${product.price}</span>
                      )}
                    </h1>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="absolute bottom-1 right-1 bg-blue-500 text-white p-2 rounded-full flex items-center"
                  >
                    <FaShoppingCart className="mr-1" />
                    {t("ProductList.addToCart")}
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center">
              <p>{t("ProductList.noProducts")}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductList;

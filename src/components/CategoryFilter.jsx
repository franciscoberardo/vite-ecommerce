import React from "react";
import { useTranslationContext } from "./TranslationContext"; // Asegúrate de que esta ruta sea correcta

const CategoryFilter = ({ categories, selectedCategory, onCategoryChange }) => {
  const { t } = useTranslationContext(); // Asegúrate de que esta línea esté presente

  return (
    <div className="flex justify-center items-center w-full p-4 bg-button rounded-lg shadow-md ">
      
      <div className="flex flex-wrap justify-center items-center space-x-4">
        {/* Opción para mostrar todos los productos */}
        <button
          onClick={() => onCategoryChange(null)}
          className={`px-4 py-2 rounded-full transition-colors duration-300 ${
            selectedCategory === null
              ? "bg-textPrimary text-white"
              : "bg-primary text-gray-700"
          }`}
        >
          {t("ProductList.showAll")}
        </button>

        {categories.length > 0 ? (
          categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`px-4 py-2 rounded-full transition-colors duration-300 ${
                selectedCategory === category.id
                ? "bg-textPrimary text-white"
                : "bg-primary text-gray-700"
              }`}
            >
              {category.name}
            </button>
          ))
        ) : (
          <p>{t("ProductList.loadingCategories")}</p>
        )}
      </div>
    </div>
  );
};

export default CategoryFilter;

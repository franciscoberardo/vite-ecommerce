import React from "react";
import { Link } from "react-router-dom"; // Asegúrate de importar Link

const CategoriesBanner = () => {
  const categories = [
    { name: "Harry Potter", path: "/harry-potter" },
    { name: "Hulk", path: "/hulk" },
  ];

  return (
    <div className="relative z-20 flex justify-center items-center h-8 bg-gray-100">
      <div className="flex space-x-8">
        {categories.map((category, index) => (
          <Link
            key={index}
            to={category.path} // Redirige a la página correspondiente
            className="text-lg font-semibold text-blue-500 hover:underline"
          >
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoriesBanner;

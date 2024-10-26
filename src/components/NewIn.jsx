import React from "react";
import ProductList from "./ProductList2";

const NewIn = ({ tag, title }) => {
  const fetchUrl = `${import.meta.env.VITE_API_URL}/products?tag=${tag}`;
  return <ProductList title={title} fetchUrl={fetchUrl} />;
};

export default NewIn;
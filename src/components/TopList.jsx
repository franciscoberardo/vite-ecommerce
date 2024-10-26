// TopList.js
import React from "react";
import ProductList from "./ProductList2";

const TopList = ({ title }) => {
  const fetchUrl = `${import.meta.env.VITE_API_URL}/products/top-expensive`;
  return <ProductList title={title} fetchUrl={fetchUrl} />;
};

export default TopList;
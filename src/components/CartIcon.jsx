import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const CartIcon = ({ cartLength, onClick }) => {
  return (
    <div className="relative">
      <button
        onClick={onClick}
        className="text-lg sm:text-xl focus:outline-none text-textPrimary"
      >
        <FaShoppingCart />
      </button>
      {cartLength > 0 && (
        <span className="absolute top-0 left-4 sm:left-5 bg-red-900 text-white rounded-full text-xs h-4 w-4 sm:h-5 sm:w-5 flex items-center justify-center">
          {cartLength}
        </span>
      )}
    </div>
  );
};

export default CartIcon;

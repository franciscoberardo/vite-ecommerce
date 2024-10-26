import React from "react";
import { useCart } from "./CartContext";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const CartPage = () => {
  const { t } = useTranslation();
  const { cart, removeFromCart, removeItemFromCart } = useCart();
  const navigate = useNavigate();

  const cartItems = cart.reduce((acc, item) => {
    const found = acc.find((i) => i.id === item.id && i.name === item.name);
    if (found) {
      found.quantity += 1;
    } else {
      acc.push({ ...item, quantity: 1 });
    }
    return acc;
  }, []);

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="p-6 bg-primary min-h-screen">
      <h1 className="text-3xl font-extrabold mb-6 text-center text-gray-800">
        {t("Cart.yourCart")}
      </h1>
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600 text-xl">
          {" "}
          {t("Cart.noProducts")}
        </p>
      ) : (
        <div className="w-4/5 mx-auto overflow-x-auto shadow-lg rounded-lg bg-white">
          <table className="w-full mx-auto table-auto text-black border border-gray-300 rounded-lg">
            <thead className="bg-gray-200">
              <tr className="border-b">
                <th className="p-4 text-left text-lg text-gray-700">
                  {" "}
                  {t("Cart.product")}
                </th>
                <th className="p-4 text-left text-lg text-gray-700">
                  {t("Cart.quantity")}
                </th>
                <th className="p-4 text-left text-lg text-gray-700">
                  {" "}
                  {t("Cart.price")}
                </th>
                <th className="p-4 text-left text-lg text-gray-700">
                  {" "}
                  {t("Cart.actions")}
                </th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr
                  key={item.id}
                  className="border-b hover:bg-gray-100 transition duration-300"
                >
                  <td className="p-4 flex items-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-32 h-32 object-cover mr-4 rounded-md shadow-sm"
                    />
                    <span className="text-gray-800 font-medium">
                      {item.name}
                    </span>
                  </td>
                  <td className="p-4 text-gray-700">{item.quantity}</td>
                  <td className="p-4 text-gray-700">
                    $
                    {item.sale_price
                      ? (item.sale_price * item.quantity).toFixed(2)
                      : (item.price * item.quantity).toFixed(2)}
                  </td>

                  <td className="p-4">
                    <button
                      onClick={() => removeItemFromCart(item.id)}
                      className="text-red-500 hover:text-red-700 focus:outline-none transition duration-300"
                    >
                      <FaTimes size={24} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <div className="flex justify-end mt-6">
        <button
          onClick={handleCheckout}
          className="text-white bg-red-500 hover:bg-red-600 focus:outline-none py-3 px-6 rounded-lg shadow-md font-semibold text-lg transition duration-300"
        >
          {t("Cart.checkout")}
        </button>
      </div>
    </div>
  );
};

export default CartPage;

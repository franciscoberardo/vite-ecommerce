import React, { useState } from "react";
import { useCart } from "../components/CartContext";
import CustomerForm from "../components/checkout/CustomerForm";
import PaymentForm from "../components/checkout/PaymentForm";
import CheckoutSummary from "../components/checkout/CheckoutSummary";

const CheckoutPage = () => {
  const { cart } = useCart();

  const cartItems = cart.reduce((acc, item) => {
    const found = acc.find((i) => i.id === item.id && i.name === item.name);
    if (found) {
      found.quantity += 1;
    } else {
      acc.push({ ...item, quantity: 1 });
    }
    return acc;
  }, []);

  const [showPaymentSection, setShowPaymentSection] = useState(false);
  const [customerData, setCustomerData] = useState({
    name: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setCustomerData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setShowPaymentSection(true);
  };

  return (
    <div className="p-6 font-rajdhani flex justify-between text-gray-800 bg-primary">
      <div className="w-full md:w-1/2 space-y-6">
        <CustomerForm
          customerData={customerData}
          handleInputChange={handleInputChange}
          handleFormSubmit={handleFormSubmit}
        />
        <PaymentForm showPaymentSection={showPaymentSection} />
      </div>
      <CheckoutSummary cartItems={cartItems} />
    </div>
  );
};

export default CheckoutPage;

import React from "react";

const PaymentForm = ({ showPaymentSection }) => {
  return (
    <div className="shadow-lg rounded-lg bg-white p-6">
      <div className="bg-gray-200 p-4 rounded-md">
        <h2 className="text-3xl font-bold">Información de Pago</h2>
      </div>
      {showPaymentSection && (
        <div className="mt-4 transition-all duration-500 ease-in-out text-lg">
          <form className="space-y-4">
            <div>
              <label htmlFor="cardNumber" className="block font-medium text-gray-700">
                Número de Tarjeta
              </label>
              <input
                type="text"
                id="cardNumber"
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md"
                placeholder="Ingresa el número de tarjeta"
                required
              />
            </div>
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label htmlFor="expiration" className="block text-sm font-medium text-gray-700">
                  Expiración
                </label>
                <input
                  type="text"
                  id="expiration"
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md"
                  placeholder="MM/AA"
                  required
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">
                  CVV
                </label>
                <input
                  type="text"
                  id="cvv"
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md"
                  placeholder="Código de Seguridad"
                  required
                />
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default PaymentForm;

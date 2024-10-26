import React from "react";

const CheckoutSummary = ({ cartItems }) => {
  return (
    <div className="w-full md:w-1/3 bg-white shadow-lg rounded-lg p-6">
      <h1 className="text-3xl font-bold mb-6">Resumen de compra</h1>
      {cartItems.length === 0 ? (
        <p className="text-gray-600">No hay productos en el carrito.</p>
      ) : (
        <div className="max-h-80 overflow-y-auto">
          <table className="w-full table-auto border-collapse mb-8 text-lg">
            <thead>
              <tr className="border-b">
                <th className="p-2 text-left text-gray-700">Producto</th>
                <th className="p-2 text-left text-gray-700">Cantidad</th>
                <th className="p-2 text-left text-gray-700">Precio</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id} className="border-b">
                  <td className="p-2 text-gray-700">{item.name}</td>
                  <td className="p-2 text-gray-700">{item.quantity}</td>
                  <td className="p-2 text-gray-700">
                    ${(item.price * item.quantity).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default CheckoutSummary;

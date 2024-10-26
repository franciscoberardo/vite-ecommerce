import React from "react";

const CustomerForm = ({ customerData, handleInputChange, handleFormSubmit }) => {
  return (
    <div className="shadow-lg rounded-lg bg-white p-6">
      <div className="bg-gray-200 p-4 rounded-md">
        <h2 className="text-3xl font-bold">Datos del Cliente</h2>
      </div>
      <div className="mt-4 transition-all duration-500 ease-in-out text-lg">
        <form onSubmit={handleFormSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block font-medium text-gray-700">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              value={customerData.name}
              onChange={handleInputChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md"
              placeholder="Ingresa tu nombre"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block font-medium text-gray-700">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              value={customerData.email}
              onChange={handleInputChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md"
              placeholder="Ingresa tu correo"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md"
          >
            Confirmar Pedido
          </button>
        </form>
      </div>
    </div>
  );
};

export default CustomerForm;

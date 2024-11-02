import React, {useState} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Payment() {
 

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="w-full max-w-md p-8 text-center bg-white rounded-lg shadow-lg">
      <div className="flex justify-center mb-4">
        <img src="logo.png" alt="Logo" className="w-12" />
      </div>
      <h2 className="mb-2 text-lg font-semibold">Pago de suscripción</h2>
      <p className="mb-6 text-sm text-gray-500">
       Proceso de pago seguro, coloque la información según los datos de su tarjeta.
      </p>
      <form>
        <input
          type="text"
          placeholder="Nombre en la tarjeta"
          className="w-full p-2 mb-4 border border-gray-300 rounded-md"
        />
        <input
          type="text"
          placeholder="Número de tarjeta"
          className="w-full p-2 mb-4 border border-gray-300 rounded-md"
        />
        <div className="flex mb-4 space-x-2">
          <input
            type="text"
            placeholder="MM / YY"
            className="w-1/2 p-2 border border-gray-300 rounded-md"
          />
          <input
            type="password"
            placeholder="CVV"
            className="w-1/2 p-2 border border-gray-300 rounded-md"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 text-white transition-colors bg-[#00455E] rounded-md hover:bg-[#FFAE00]"
        >
          Procesar
        </button>
        <p className="mt-4 text-xs text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </form>
    </div>
  </div>

  );
}

export default Payment
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';


function Suscription() {

    const navigate = useNavigate();
    

    // Función para manejar la selección de la suscripción
  const handleSubscriptionSelection = (subscription) => {
    
    navigate('/payment', {state: {subscription}}); 
  };
    
  return (
    
    <div className="flex items-center justify-center h-screen overflow-hidden bg-blue-50">
    <div className="w-full p-12 bg-gray-50 lg:w-6/12 md:w-8/12 shadow-3xl rounded-xl md:p-24">
      <h2 className="mb-6 text-2xl font-semibold text-center">Selecciona tu Suscripción</h2>
      <div className="flex justify-between gap-6">
        
        {/* Tarjeta Estándar */}
        <div className="flex flex-col justify-between flex-1 p-4 transition duration-300 transform border border-gray-300 rounded-lg shadow-lg hover:shadow-xl hover:scale-105">
          <div>
            <h3 className="text-xl font-bold">Estándar</h3>
            <p className="mt-2">
              Accede hasta 10 propuestas de proyectos al mes con funciones básicas de búsqueda y visualización.
            </p>
            <p className="mt-4 text-lg font-semibold">$1/mes</p>
          </div>
          <button
            className="w-full p-2 mt-4 font-medium text-white uppercase rounded bg-gradient-to-b from-gray-500 to-gray-800 md:p-4"
            onClick={() => handleSubscriptionSelection('Estándar')}
          >
            Suscribirse
          </button>
        </div>

        {/* Tarjeta Premium */}
        <div className="flex flex-col justify-between flex-1 p-4 transition duration-300 transform border border-gray-300 rounded-lg shadow-lg hover:shadow-xl hover:scale-105">
          <div>
            <h3 className="text-xl font-bold">Premium</h3>
            <p className="mt-2">
              Acceso ilimitado a todos los proyectos, funciones avanzadas de búsqueda y soporte prioritario.
            </p>
            <p className="mt-4 text-lg font-semibold">$10/mes</p>
          </div>
          <button
            className="w-full p-2 mt-4 font-medium text-white uppercase rounded bg-gradient-to-b from-gray-500 to-gray-800 md:p-4"
            onClick={() => handleSubscriptionSelection('Premium')}
          >
            Suscribirse
          </button>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Suscription
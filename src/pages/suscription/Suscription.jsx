import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';


function Suscription() {
  
  const navigate = useNavigate();
  const [billingCycle, setBillingCycle] = useState('monthly');

  const handleSubscriptionSelection = (subscription) => {
      navigate('/payment', { state: { subscription } });
  };
    
  return (
    
    <div className="flex items-center justify-center min-h-screen p-6 bg-blue-50">
            <div className="w-full max-w-4xl p-8 bg-white shadow-xl rounded-xl">
                <h2 className="mb-4 text-2xl font-semibold text-center">Elige tu suscripción</h2>
                
                {/* Toggle for Monthly/Yearly Billing */}
                <div className="flex items-center justify-center mb-6">
                    <button 
                        className={`px-4 py-2 ${billingCycle === 'monthly' ? 'bg-[#00455E] text-white' : 'bg-gray-200 text-gray-600'} rounded-l-lg`} 
                        onClick={() => setBillingCycle('monthly')}
                    >
                        Mensual
                    </button>
                    <button 
                        className={`px-4 py-2 ${billingCycle === 'yearly' ? 'bg-[#00455E] text-white' : 'bg-gray-200 text-gray-600'} rounded-r-lg`} 
                        onClick={() => setBillingCycle('yearly')}
                    >
                        Anual
                    </button>
                </div>

                <div className="flex justify-between gap-6">
                    {/* Estándar Plan */}
                    <div  className="flex flex-col justify-between flex-1 p-6 transition-transform duration-300 transform border border-gray-300 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl">
                        <div>
                            <h3 className="text-xl font-bold text-center">Estándar</h3>
                            <p className="mt-4 text-lg font-semibold text-center">
                                {billingCycle === 'monthly' ? '$2/mes' : '$10/año'}
                            </p>
                            <ul className="mt-4 space-y-2 text-sm text-gray-600">
                                <li>Accede hasta 10 propuestas de proyectos al mes.</li>
                                <li>Funciones básicas de búsqueda y visualización.</li>
                            </ul>
                        </div>
                        <button
                            className="w-full p-2 mt-6 font-medium text-white bg-[#00455E] rounded"
                            onClick={() => handleSubscriptionSelection('Basic')}
                        >
                            Iniciar
                        </button>
                    </div>

                    {/* Premium Plan */}
                    <div  className="flex flex-col justify-between flex-1 p-6 transition-transform duration-300 transform border border-gray-300 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl">
                        <div>
                            <h3 className="text-xl font-bold text-center">Premium</h3>
                            <p className="mt-4 text-lg font-semibold text-center">
                                {billingCycle === 'monthly' ? '$10/mes' : '$100/año'}
                            </p>
                            <ul className="mt-4 space-y-2 text-sm text-gray-600">
                                <li>Acceso ilimitado a todos los proyectos.</li>
                                <li>Funciones de búsqueda avanzadas.</li>
                                <li>Soporte prioritario.</li>
                            </ul>
                        </div>
                        <button
                            className="w-full p-2 mt-6 font-medium text-white bg-[#00455E] rounded"
                            onClick={() => handleSubscriptionSelection('Premium')}
                        >
                            Iniciar
                        </button>
                    </div>
                </div>
            </div>
        </div>
  );
}

export default Suscription
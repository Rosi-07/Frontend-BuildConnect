import React, {useState} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Payment() {
  
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  
  const navigate = useNavigate(); // Inicializamos el hook de navegación
  const location = useLocation();

  
  const selectedSubscription = location.state?.subscription || 'Básica';
  
  const validateCardNumber = (number) => {
    const regex = /^\d{16}$/;
    return regex.test(number);
  };

  const validateExpiryDate = (date) => {
    const regex = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;
    return regex.test(date);
  };

  const validateCVV = (cvv) => {
    const regex = /^\d{3}$/;
    return regex.test(cvv);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    if (!validateCardNumber(cardNumber)) {
      setError('Número de tarjeta inválido');
      return;
    }

    if (!validateExpiryDate(expiryDate)) {
      setError('Fecha de vencimiento inválida. El formato es: MM/AA');
      return;
    }

    if (!validateCVV(cvv)) {
      setError('CVV inválido');
      return;
    }
    
    //Simulación del proceso de pago

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setMessage('Pago procesado con éxito para la suscripción ${selectedSubscription}!');
      
      //Limpiar los campos
      
      setName('');
      setCardNumber('');
      setExpiryDate('');
      setCvv('');

      // Redirigir a la vista del perfil de la empresa después de un breve tiempo
      setTimeout(() => {
        navigate('/companyProfile');
      }, 2000);
     }, 3000); // Simulación de un retraso de 3 segundos para el pago
    };
    

  return (
    <div className="max-w-4xl mx-auto font-[sans-serif] p-6">
      <div className="mb-10 text-center">
        <h4 className="inline-block pb-2 mt-3 text-xl font-medium text-gray-800 border-b-2 border-gray-300">
          Proceso de Pago
        </h4>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="grid gap-8 sm:grid-cols-2">
          <div className="flex justify-center">
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
              placeholder="Nombre del propietario"
            />
          </div>
          <div className="flex justify-center">
            <input
              type="text"
              id="cardNumber"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              required
              className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
              placeholder="Número de tarjeta"
            />
          </div>
          <div className="flex justify-center">
            <input
              type="text"
              id="expiryDate"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              required
              className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
              placeholder="Fecha de vencimiento (MM/AA)"
            />
          </div>
          <div className="flex justify-center">
            <input
              type="text"
              id="cvv"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              required
              className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
              placeholder="CVV"
            />
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="py-3.5 px-7 text-sm font-semibold tracking-wider rounded-md text-white bg-[#00455E] hover:bg-[#00455eb6] transition-all"
            disabled={loading}
          >
            {loading ? 'Procesando...' : 'Procesar Pago'}
          </button>
        </div>
      </form>
      {error && (
        <div className="mt-6 font-semibold text-center text-red-500">
          {error}
        </div>
      )}
      {message && (
        <div className="mt-6 font-semibold text-center text-green-500">
          {message}
        </div>
      )}
    </div>
  );
}

export default Payment
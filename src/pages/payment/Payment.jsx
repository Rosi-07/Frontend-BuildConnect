import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';


function Payment() {
  
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [message, setMessage] = useState('');
  
  const navigate = useNavigate(); // Inicializamos el hook de navegación

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita la recarga de la página

    // Simulación de un proceso de pago
    setMessage(`Pago procesado con éxito para ${name}!`);

    // Limpiar los campos después de enviar el formulario
    setName('');
    setCardNumber('');
    setExpiryDate('');
    setCvv('');

    // Redirigir a la vista del perfil de la empresa
    navigate('/companyProfile'); // Aquí redirigimos a la nueva vista
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
          >
            Procesar Pago
          </button>
        </div>
      </form>
      {message && (
        <div className="mt-6 font-semibold text-center text-green-500">
          {message}
        </div>
      )}
    </div>
  )
}

export default Payment
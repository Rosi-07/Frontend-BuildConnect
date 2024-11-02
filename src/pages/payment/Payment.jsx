import React, { useState } from "react";
import { useSnackbar } from "notistack";
import { FaCcVisa, FaCcMastercard, FaCcAmex } from "react-icons/fa";

function Payment() {
  const { enqueueSnackbar } = useSnackbar(); // Hook para mostrar notificaciones
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  // Función para agregar automáticamente una barra inclinada en la fecha de vencimiento
  const handleExpiryDateChange = (e) => {
    let value = e.target.value;

    // Agrega "/" automáticamente después de los dos primeros dígitos (mes)
    if (value.length === 2 && !value.includes("/")) {
      value = value + "/";
    }

    // Asegura que no se introduzcan más de  caracteres (MM/YY)
    if (value.length <= 5) {
      setExpiryDate(value);
    }
  };

  const handlePayment = (e) => {
    e.preventDefault();

    setIsProcessing(true);

    setTimeout(() => {
      enqueueSnackbar("Pago realizado con éxito.", { variant: "success" });

      // Resetea el formulario
      setName("");
      setCardNumber("");
      setExpiryDate("");
      setCvv("");

      setIsProcessing(false);
    }, 2000); // Simula un retraso de 2 segundos
  };

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
        <form onSubmit={handlePayment}>
          <input
            type="text"
            placeholder="Nombre en la tarjeta"
            className="w-full p-2 mb-4 border border-gray-300 rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Número de tarjeta"
              className="w-full p-2 pr-16 border border-gray-300 rounded-md"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
            />
            <div className="absolute flex space-x-2 text-gray-500 right-2 top-2">
              <FaCcVisa className="w-6 h-6" />
              <FaCcMastercard className="w-6 h-6" />
              <FaCcAmex className="w-6 h-6" />
            </div>
          </div>

          <div className="flex mb-4 space-x-2">
            <input
              type="text"
              placeholder="MM / YY"
              className="w-1/2 p-2 border border-gray-300 rounded-md"
              value={expiryDate}
              onChange={handleExpiryDateChange}
              maxLength="5" // Limita la longitud máxima a 5 caracteres (MM/YY)
            />
            <input
              type="password"
              placeholder="CVV"
              className="w-1/2 p-2 border border-gray-300 rounded-md"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
            />
          </div>
          
          <button
            type="submit"
            className={`w-full py-2 text-white transition-colors rounded-md ${
              isProcessing ? "bg-gray-400 cursor-not-allowed" : "bg-[#00455E] hover:bg-[#FFAE00]"
            }`}
            disabled={isProcessing}
          >
            {isProcessing ? "Procesando..." : "Procesar"}
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

export default Payment;

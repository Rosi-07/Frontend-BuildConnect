import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack"; 
import api from '../../../database/api';

function RegisterCompany() {
  const [companyData, setCompanyData] = useState({
    legalId: '',     
    name: '',       
    phone: '',
    address: '',
    email: '',
    password: '',
    cpassword: '',
  });

  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCompanyData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (companyData.password !== companyData.cpassword) {
      enqueueSnackbar("Las contraseñas no coinciden", { variant: "error" });
      return;
    }

    try {
 
      const response = await api.post("auth/register-company", {
        legalId: companyData.legalId || '',  
        name: companyData.name || '',
        email: companyData.email,
        password: companyData.password,
        phone: companyData.phone,
        address: companyData.address,
        role: "company",      
        pricing: {                 
          plan: "free",       
          payDay: "2024-09-06 09:43:00"
        },
        isEmailVerified: false   
      });

      enqueueSnackbar("Registro exitoso", { variant: "success" });
      navigate('/methodPay'); 
    } catch (error) {
      enqueueSnackbar(`${error.response?.data?.message || "Error al registrar la compañía"}`, { variant: "error" });
    }
  };

  return (
    <div className="max-w-4xl mx-auto font-[sans-serif] p-6">
      <div className="mb-10 text-center">
        <h4 className="inline-block pb-2 mt-3 text-xl font-medium text-gray-800 border-b-2 border-gray-300">
          Regístrate
        </h4>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="grid gap-8 sm:grid-cols-2">
          <div className="flex justify-center">
            <input 
              name="legalId"          // Updated field name
              type="number" 
              value={companyData.legalId}   // Updated value key
              onChange={handleChange}
              className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" 
              placeholder="Identificación Tributaria" 
            />
          </div>
          <div className="flex justify-center">
            <input 
              name="name"            
              type="text" 
              value={companyData.name}  
              onChange={handleChange}
              className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" 
              placeholder="Nombre de la compañía" 
            />
          </div>
          <div className="flex justify-center">
            <input 
              name="phone" 
              type="number" 
              value={companyData.phone}
              onChange={handleChange}
              className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" 
              placeholder="Número de contacto" 
            />
          </div>
          <div className="flex justify-center">
            <input 
              name="address" 
              type="text" 
              value={companyData.address}
              onChange={handleChange}
              className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" 
              placeholder="Dirección" 
            />
          </div>
          <div className="flex justify-center">
            <input 
              name="email" 
              type="email" 
              value={companyData.email}
              onChange={handleChange}
              className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" 
              placeholder="Correo Electrónico" 
            />
          </div>
          <div className="flex justify-center">
            <input 
              name="password" 
              type="password" 
              value={companyData.password}
              onChange={handleChange}
              className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" 
              placeholder="Contraseña" 
            />
          </div>
          <div className="flex justify-center">
            <input 
              name="cpassword" 
              type="password" 
              value={companyData.cpassword}
              onChange={handleChange}
              className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" 
              placeholder="Confirmar contraseña" 
            />
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <button type="submit" className="py-3.5 px-7 text-sm font-semibold tracking-wider rounded-md text-white bg-[#00455E] hover:bg-[#00455eb6] items-center">
            Aceptar
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegisterCompany;

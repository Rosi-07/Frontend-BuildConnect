import React from 'react'
import useAxiosPrivate from '../../hooks/auth/useAxiosPrivate';
import { useEffect, useState } from 'react';
import useAuthStore from '../../hooks/auth/useAuth';


function CompanyProfile() {

  const api = useAxiosPrivate ();
  
  const {auth} = useAuthStore ();
  
  const [companyData, setCompanyData] = useState ({
    name: '',
    description: '',
    mission: '',
    vision: '',
    address: {
      province: '',
      canton: '',
      district: '',
    },
    contacts: {
      emails: [],
      numbers: []
    }
  });
    

  useEffect (() =>{
    console.log(auth);
    const fetchCompany = async () => {
      try{
   
        const response = await api.get(`/companies/${auth?.user?.id}`)
        setCompanyData (response.data.Company);
        console.log(response.data.Company);
      
      }
      catch(error){
        console.error(error);
      }
      
    };
    
      fetchCompany();
    
  }, [api, auth?.user]);

  return (
    
<div className="flex flex-col items-center h-screen p-4 bg-blue-50">
  <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-md">
    <div className="flex items-center mb-6">
      <img
        src="/AMConstructora.png" 
        alt="Logo de la Empresa"
        className="w-16 h-16 mr-4"
      />
      <div>
        <h1 className="text-3xl font-bold">{companyData.name}</h1>
        <p className="text-gray-500">
          Ubicación: {companyData.address.province}, {companyData.address.canton}, {companyData.address.district}
        </p>
      </div>
    </div>
    
    <h2 className="mb-4 text-2xl font-semibold">Descripción de la empresa</h2>
    <p className="mb-4">{companyData.description}</p>

    <h3 className="text-xl font-bold">Misión</h3>
    <p className="mb-4">{companyData.mission}</p>

    <h3 className="text-xl font-bold">Visión</h3>
    <p className="mb-4">{companyData.vision}</p>

    <h3 className="text-xl font-bold">Contactos</h3>
    <div className="mb-4">
      <h4 className="font-semibold">Correos Electrónicos:</h4>
      <ul className="pl-5 list-disc">
        {auth.user?.contacts?.emails.map((email, index) => (
          <li key={index}>{email}</li>
        ))}
      </ul>
    </div>

    <div className="mb-4">
      <h4 className="font-semibold">Números de Contacto:</h4>
      <ul className="pl-5 list-disc">
        {auth.user?.contacts?.numbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
    </div>
  </div>
</div>


  );
}

export default CompanyProfile
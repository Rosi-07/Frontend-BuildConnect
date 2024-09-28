import React from 'react';
import { Link } from "react-router-dom";


function RegisterCompany() {
  return (
    <div class="max-w-4xl mx-auto font-[sans-serif] p-6 ">
    <div class="text-center mb-10">
    <h4 class="text-gray-800 text-xl font-medium mt-3 pb-2 border-b-2 border-gray-300 inline-block">
        Regístrate
    </h4>
    </div>
<form>

    <div class="grid sm:grid-cols-2 gap-8">
        <div class="flex justify-center">
            <input name="DNI" type="number" class="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Identificación Tributaria" />
        </div>
        <div class="flex justify-center">
            <input name="Name" type="text" class="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Nombre de la compañía" />
        </div>
        <div class="flex justify-center">
            <input name="phone" type="number" class="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Número de contacto" />
        </div>
        <div class="flex justify-center">
            <input name="address" type="text" class="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Dirección" />
        </div>
        <div class="flex justify-center">
            <input name="email" type="email" class="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Correo Electrónico" />
        </div>
        <div class="flex justify-center">
            <input name="password" type="password" class="bg-gray-100  w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Contraseña" />
        </div>
        <div class="flex justify-center">
            <input name="cpassword" type="password" class="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Confirmar contraseña" />
        </div>
    </div>
 <div className="flex justify-center mt-6">
    <Link to='/methodPay'>
    <button type="button" class="py-3.5 px-7 text-sm font-semibold tracking-wider rounded-md text-white bg-[#00455E] hover:bg-[#00455eb6] items-center">
      Aceptar
    </button>
    </Link>
  </div>
</form>
</div>
  )
}

export default RegisterCompany
import React from 'react'
import { Link } from "react-router-dom";


function RegisterType() {
    return (
        <div class="bg-blue-50 h-screen overflow-hidden flex items-center justify-center">
            <div class="bg-gray-50 lg:w-6/12 md:7/12 w-8/12 shadow-3xl rounded-xl">
                <form class="p-12 md:p-24">
                    <div className='mb-8'>
                    <Link to="/RegisterUser">
                        <button  class="bg-gradient-to-b from-gray-500 to-gray-800 font-medium p-2 md:p-4 text-white uppercase w-full rounded">Cliente</button>
                    </Link >
                    </div>
                    
                    <div>
                    <Link to="/RegisterCompany">
                        <button class="bg-gradient-to-b from-gray-500 to-gray-800 font-medium p-2 md:p-4 text-white uppercase w-full rounded">Empresa</button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RegisterType
import React from 'react';
import { Link } from "react-router-dom";

function BusinessCatalog() {

    const companies = [
        { id: 1, name: "Empresa 1" },
        { id: 2, name: "Empresa 2" },
        { id: 3, name: "Empresa 3" },
        // Añade más empresas según lo necesites
      ];
  return (
    <div className="container flex flex-col h-screen mx-auto mt-8 shadow-lg">
      <h1 className="py-4 text-3xl font-bold text-center">Catálogo de empresas</h1>
      <div className="flex flex-1">
        <div className="flex flex-col justify-between w-1/3 p-4 bg-gray-100">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Buscar empresa..."
              className="w-full px-4 py-2 border rounded focus:outline-none"
            />
          </div>
          <ul className="flex-grow space-y-2">
            {companies.map((company) => (
              <li key={company.id} className="p-2 rounded hover:bg-gray-200">
                <Link to={`/empresa/${company.id}`} className="text-blue-600 hover:underline">
                  {company.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center justify-center w-2/3 p-6 text-gray-500">
          <p className="text-center">Seleccione una empresa para ver los detalles...</p>
        </div>
      </div>
    </div>
  );
}

export default BusinessCatalog
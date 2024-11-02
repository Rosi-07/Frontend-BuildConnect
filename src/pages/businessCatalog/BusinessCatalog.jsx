import { useState, useEffect } from 'react';
import useAxiosPrivate from '../../hooks/auth/useAxiosPrivate';
import CompanyDetails from './components/CompanyDetails';

function BusinessCatalog() {
  const api = useAxiosPrivate();
  const [companies, setCompanies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCompanies, setFilteredCompanies] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState(null);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await api.get('companies');
        setCompanies(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchCompanies();
  }, [api]);

  useEffect(() => {
    setFilteredCompanies(
      companies.filter((company) =>
        company?.Company?.name?.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, companies]);

  return (
    <div className="container flex flex-col mx-auto mt-8 shadow-lg">
      <h1 className="py-4 text-3xl font-bold text-center">Catálogo de empresas</h1>
      <div className="flex flex-row">
        <div className="flex flex-col justify-between w-1/3 p-4 bg-gray-100">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Buscar empresa..."
              className="w-full px-4 py-2 border rounded focus:outline-none"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <ul className="flex-grow space-y-2">
            {filteredCompanies.map((company) => (
              <li key={company.id} className="p-2 rounded hover:bg-gray-200">
                <button
                  className="w-full text-left"
                  onClick={() => setSelectedCompany(company)}
                >
                  {company?.Company?.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center justify-center w-2/3 p-6 text-gray-500">
          {selectedCompany ? (
            <CompanyDetails company={selectedCompany} />
          ) : (
            <div className="text-center">Seleccione una empresa para ver los detalles.</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default BusinessCatalog;

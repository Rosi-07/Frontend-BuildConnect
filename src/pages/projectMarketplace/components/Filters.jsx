import useAxiosPrivate from "../../../hooks/auth/useAxiosPrivate";
import { useState, useEffect } from "react";

const Filters = ({ onFilterChange }) => {
  const api = useAxiosPrivate();
  const [filters, setFilters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeFilter, setActiveFilter] = useState('Todos'); 

  useEffect(() => {
    const fetchFilters = async () => {
      try {
        const response = await api.get('/project-type');
        const types = response.data.map((type) => type.name);
        setFilters(types); 
      } catch (err) {
        setError("Error al cargar los filtros");
      } finally {
        setLoading(false);
      }
    };

    fetchFilters();
  }, [api]);

  if (loading) return <p>Cargando filtros...</p>;
  if (error) return <p>{error}</p>;

  const handleFilterClick = (filter) => {
    onFilterChange(filter); 
    setActiveFilter(filter); 
  };

  const handleResetFilters = () => {
    onFilterChange('Todos'); 
    setActiveFilter('Todos'); 
  };

  return (
    <div className="flex flex-wrap justify-center gap-2 mb-6">
      <button 
        className={`p-2 transition-colors border rounded-md ${activeFilter === 'Todos' ? 'bg-[#00455e] text-white' : 'hover:bg-[#00455e] hover:text-white'}`}
        onClick={handleResetFilters} 
      >
        Todos
      </button>
      {filters.map((filter) => (
        <button 
          key={filter} 
          className={`p-2 transition-colors border rounded-md ${activeFilter === filter ? 'bg-[#00455e] text-white' : 'hover:bg-[#00455e] hover:text-white'}`}
          onClick={() => handleFilterClick(filter)} 
        >
          {filter}
        </button>
      ))}
    </div>
  );
}

export default Filters;

import { useEffect, useState } from 'react';
import SearchBar from './components/SearchBar';
import Filters from './components/Filters';
import ProjectGrid from './components/ProjectGrid';
import useAxiosPrivate from '../../hooks/auth/useAxiosPrivate';
import useAuthStore from '../../hooks/auth/useAuth';
import { useNavigate } from 'react-router-dom';

const ProjectMarketplace = () => {
  const api = useAxiosPrivate();
  const auth = useAuthStore((state) => state.auth);
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('Todos');

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const response = await api.get('projects');
        setProjects(response.data);
      } catch (err) {
        setError('Error fetching projects.');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [api]);

  useEffect(() => {
    let filtered = projects;

    if (searchTerm) {
      filtered = filtered.filter(
        (project) =>
          project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.description
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          project.location.canton
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          project.location.province
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
      );
    }

    if (selectedFilter !== 'Todos') {
      filtered = filtered.filter((project) =>
        project.types.some((type) => type.name === selectedFilter)
      );
    }

    setFilteredProjects(filtered);
  }, [searchTerm, projects, selectedFilter]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  if (loading) {
    return <div className='text-center text-white'>Cargando proyectos...</div>;
  }

  if (error) {
    return (
      <div className='text-center text-red-500'>
        {auth?.user ? (
          error
        ) : (
          <div>
            <p>Debes iniciar sesión para ver los proyectos</p>
            <button
              className='px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700'
              onClick={() => navigate('/login')}
            >
              Iniciar sesión
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className='min-h-screen p-10'>
      <SearchBar onSearchChange={handleSearchChange} />
      <Filters onFilterChange={handleFilterChange} />
      <ProjectGrid projects={filteredProjects} totalProjects={projects} />
    </div>
  );
};

export default ProjectMarketplace;

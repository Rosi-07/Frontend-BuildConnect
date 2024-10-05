import { useEffect, useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import Filters from './components/Filters';
import ProjectGrid from './components/ProjectGrid';

const ProjectMarketplace = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);

        // Configuración del token
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiZW1haWwiOiJhQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcyODA4MzQ3OH0.wo-LF1VkqZ7hksXGhwJ1FAksQdxviAoCMeI7xrZn700';
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        // Llamada a la API con el token
        const response = await axios.get('http://localhost:3000/api/projects/', config);
        setProjects(response.data);
        setFilteredProjects(response.data);
      } catch (err) {
        console.log(err);
        setError('Error fetching projects.');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  useEffect(() => {
    // Filtrar proyectos según el término de búsqueda
    if (searchTerm === '') {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(project =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProjects(filtered);
    }
  }, [searchTerm, projects]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  if (loading) {
    return <div className="text-center text-white">Cargando proyectos...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className="min-h-screen p-10">
      <SearchBar onSearchChange={handleSearchChange} />
      <Filters />
      <ProjectGrid projects={filteredProjects} />
    </div>
  );
}

export default ProjectMarketplace;

import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import Filters from "./components/Filters";
import ProjectGrid from "./components/ProjectGrid";
import useAxiosPrivate from "../../hooks/auth/useAxiosPrivate";

const ProjectMarketplace = () => {
  const api = useAxiosPrivate();
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("Todos");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const response = await api.get("projects");
        setProjects(response.data);
      } catch (err) {
        setError("Error fetching projects.");
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
          project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.location.canton.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.location.province.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedFilter !== "Todos") {
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
    return <div className="text-center text-white">Cargando proyectos...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className="min-h-screen p-10">
      <SearchBar onSearchChange={handleSearchChange} />
      <Filters onFilterChange={handleFilterChange} />
      <ProjectGrid projects={filteredProjects} />
    </div>
  );
};

export default ProjectMarketplace;

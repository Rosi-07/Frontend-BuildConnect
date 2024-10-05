import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        setLoading(true);
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiZW1haWwiOiJhQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcyODA4MzQ3OH0.wo-LF1VkqZ7hksXGhwJ1FAksQdxviAoCMeI7xrZn700';
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        const response = await axios.get(`http://localhost:3000/api/projects/${id}`, config);
        setProject(response.data);
      } catch (err) {
        console.log(err);
        setError('Error fetching project details.');
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  if (loading) {
    return <div className="text-center text-white">Cargando detalles del proyecto...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  if (!project) {
    return <div className="text-center text-white">No se encontraron detalles del proyecto.</div>;
  }

  return (
    <div className="min-h-screen p-20 text-white bg-gradient-to-b from-white to-gray-400">
      {/* Encabezado del Proyecto */}
      <div className="flex flex-col items-start p-8 mb-10 space-y-6 bg-[#00455E] shadow-lg md:flex-row rounded-xl md:space-y-0 md:space-x-10">
        <img
          src="https://via.placeholder.com/400"
          alt="project illustration"
          className="w-full rounded-lg shadow-md md:w-1/3"
        />
        <div className="flex-1">
          <h1 className="mb-4 text-5xl font-extrabold text-yellow-400">{project.title}</h1>
          <div className="flex items-center mb-6 space-x-4 text-lg text-gray-300">
            <span className="px-3 py-1 bg-gray-500 rounded-full">{project.projectType}</span>
            <span className="px-3 py-1 bg-gray-500 rounded-full">Categoría: {project.CategoryId}</span>
          </div>
          <p className="text-lg leading-relaxed tracking-wide">{project.description}</p>
        </div>
      </div>

      {/* Sección de Detalles del Proyecto */}
      <div className="p-8 mb-12 bg-[#00455E] shadow-lg rounded-xl">
        <h2 className="mb-6 text-3xl font-semibold text-yellow-400">Detalles del Proyecto</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="flex items-start">
            <div className="mr-4">
              <svg className="w-10 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2C5.58 2 2 5.58 2 10s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm1 14v-4H9v4H6v-6H4l6-6 6 6h-2v6h-3z"/>
              </svg>
            </div>
            <div>
              <h3 className="mb-1 text-xl font-medium text-gray-300">Ubicación</h3>
              <p className="text-lg">{project.location}</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="mr-4">
              <svg className="w-10 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M12 8c0-1.1-.9-2-2-2S8 6.9 8 8s.9 2 2 2 2-.9 2-2zm0 2.75v1.69c0 1.21-1.1 2.22-2.33 2.22S7.33 13.65 7.33 12.44V10.75C6.67 10.38 6 9.64 6 8.75 6 7.5 7.12 6.5 8.5 6.5s2.5 1 2.5 2.25c0 .89-.67 1.63-1.5 2v1.69c0 .25.17.56.5.56s.5-.31.5-.56v-1.69c.82-.37 1.5-1.11 1.5-2 0-1.25-1.12-2.25-2.5-2.25S6 7.5 6 8.75c0 .89.67 1.63 1.5 2V12.44c0 .89.78 1.56 1.67 1.56S11 13.33 11 12.44v-1.69c.82-.37 1.5-1.11 1.5-2 0-1.25-1.12-2.25-2.5-2.25s-2.5 1-2.5 2.25c0 .89.67 1.63 1.5 2z"/>
              </svg>
            </div>
            <div>
              <h3 className="mb-1 text-xl font-medium text-gray-300">Presupuesto Estimado</h3>
              <p className="text-lg">${project.budget.toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Información del Cliente */}
      <div className="p-8 mb-12 bg-[#00455E] shadow-lg rounded-xl">
        <h2 className="mb-6 text-3xl font-semibold text-yellow-400">Información del Cliente</h2>
        <div className="flex items-start">
          <div className="mr-4">
            <svg className="w-10 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm-2 7V7h4v2h-4zm0 4v-2h4v2h-4z"/>
            </svg>
          </div>
          <div>
            <h3 className="mb-1 text-xl font-medium text-gray-300">ID del Cliente</h3>
            <p className="text-lg">{project.UserId}</p>
          </div>
        </div>
      </div>

      {/* Fechas Estimadas */}
      <div className="p-8 bg-[#00455E] shadow-lg rounded-xl">
        <h2 className="mb-6 text-3xl font-semibold text-yellow-400">Fechas Estimadas</h2>
        <ul className="space-y-2 text-lg list-disc list-inside">
          <li>Fecha de inicio prevista: {new Date(project.starDate).toLocaleDateString()}</li>
          <li>Fecha de finalización deseada: {new Date(project.endDate).toLocaleDateString()}</li>
        </ul>
      </div>
    </div>
  );
};

export default ProjectDetails;

import ProjectCard from './ProjectCard';
import PropTypes from 'prop-types';

const ProjectGrid = ({ projects, totalProjects }) => {
  console.log(totalProjects.length);

  return (
    <>
      <div className='container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 md:grid-cols-3 justify-items-center'>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.description}
            canton={project.location.canton}
            province={project.location.province}
          />
        ))}
      </div>
      {totalProjects.length === 5 && (
        <div className='p-4 mt-5 text-center text-black rounded-lg '>
          <p className='mb-2 text-lg font-semibold'>
            ¿Quieres ver más proyectos?
          </p>
          <span className='text-blue-800'>
            Suscríbete a nuestro plan premium para acceso ilimitado.
          </span>
        </div>
      )}
    </>
  );
};

ProjectCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  canton: PropTypes.string,
  province: PropTypes.string,
};

export default ProjectGrid;

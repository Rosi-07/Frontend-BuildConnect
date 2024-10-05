import ProjectCard from './ProjectCard';
import PropTypes from 'prop-types';

const ProjectGrid = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard 
          key={project.id} 
          id={project.id}
          title={project.title} 
          location={project.location} 
          description={project.description} 
        />
      ))}
    </div>
  );
}
ProjectGrid.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ProjectGrid;
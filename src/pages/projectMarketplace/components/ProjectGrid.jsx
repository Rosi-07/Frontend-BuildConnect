import ProjectCard from "./ProjectCard";
import PropTypes from "prop-types";

const ProjectGrid = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
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

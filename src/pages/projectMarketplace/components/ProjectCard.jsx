import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ProjectCard = ({ id, title, description, canton, province }) => {
  return (
    <Link to={`/marketplace/${id}`}>
      <div className="p-4  border border-gray-100 rounded-md shadow-md cursor-pointer hover:bg-[#00455e0e]">
        <div className="flex items-center mb-4">
          <img
            src="https://www.simplespex.co.uk/wp-content/uploads/2013/06/frame_repair.png"
            alt="project illustration"
            className="w-16 h-16 mr-4 rounded-md"
          />
          <div>
            <h3 className="text-xl font-bold text-gray-500">{title}</h3>
            <p className="text-sm text-gray-400">
              Ubicación: {canton}, {province}
            </p>
          </div>
        </div>
        <p className="mb-4 text-gray-600">{description}</p>
      </div>
    </Link>
  );
};

ProjectCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ProjectCard;

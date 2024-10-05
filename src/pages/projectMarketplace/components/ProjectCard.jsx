import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProjectCard = ({ id, title, location, description }) => {
  return (
    <Link to={`/marketplace/${id}`}>
      <div className="p-4 bg-[#00455E] border border-gray-700 rounded-md shadow-md cursor-pointer hover:bg-gray-700">
        <div className="flex items-center mb-4">
          <img 
            src="https://via.placeholder.com/100" 
            alt="project illustration" 
            className="w-16 h-16 mr-4 rounded-md"
          />
          <div>
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <p className="text-sm text-gray-400">{location}</p>
          </div>
        </div>
        <p className="mb-4 text-gray-200">{description}</p>
      </div>
    </Link>
  );
}

ProjectCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default ProjectCard;

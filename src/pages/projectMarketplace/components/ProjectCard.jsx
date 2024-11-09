import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProjectCard = ({ id, title, description, canton, province }) => {
  return (
    <Link to={`/marketplace/${id}`} className='w-full'>
      <div className='h-64 p-4 border border-gray-100 rounded-md shadow-md cursor-pointer hover:bg-[#00455e0e]'>
        <div className='flex items-center mb-4'>
          <img
            src='https://www.simplespex.co.uk/wp-content/uploads/2013/06/frame_repair.png'
            alt='project illustration'
            className='object-cover w-16 h-16 mr-4 rounded-md'
          />
          <div className=''>
            <h3 className='text-lg font-bold text-gray-500 break-normal'>
              {title}
            </h3>
            <p className='text-xs text-gray-400 truncate'>
              Ubicación: {canton}, {province}
            </p>
          </div>
        </div>
        <p className='text-sm text-gray-600 line-clamp-3'>{description}</p>
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

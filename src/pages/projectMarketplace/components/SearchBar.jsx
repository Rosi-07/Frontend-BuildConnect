
import PropTypes from 'prop-types';

const SearchBar = ({ onSearchChange }) => {
  return (
    <div className="flex items-center justify-center mb-6">
      <input 
        type="text" 
        placeholder="Buscar por título o descripción" 
        onChange={onSearchChange}
        className="w-full p-2 text-black border md:w-1/2 rounded-l-md" 
      />
      <button className="p-2 text-white border border-gray bg-[#00455e00] rounded-r-md hover:bg-[#00455e3b]">
        🔍
      </button>
    </div>
  );
};

SearchBar.propTypes = {
  onSearchChange: PropTypes.func.isRequired,
};

export default SearchBar;

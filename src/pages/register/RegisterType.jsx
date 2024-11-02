import { FaUserTie, FaBuilding } from 'react-icons/fa';
import PropTypes from 'prop-types';

function RegisterType({ handleNext, setType }) {
  return (
    <div className='bg-white border border-gray-200 shadow-xl rounded-xl'>
      <div className='p-10 md:p-16'>
        <h2 className='mb-8 text-2xl font-bold text-center text-gray-700 md:text-3xl'>
          Elige tu tipo de registro
        </h2>
        <div className='mb-6'>
          <button
            onClick={() => {
              handleNext(1);
              setType('owner');
            }}
            className='flex items-center justify-center w-full gap-2 p-3 text-lg font-semibold text-gray-800 uppercase transition-all duration-200 bg-yellow-500 rounded shadow-md hover:bg-yellow-600 md:p-4'
          >
            <FaUserTie className='text-xl' />
            Cliente
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              handleNext(1);
              setType('company');
            }}
            className='flex items-center justify-center w-full gap-2 p-3 text-lg font-semibold text-white uppercase transition-all duration-200 bg-gray-700 rounded shadow-md hover:bg-gray-800 md:p-4'
          >
            <FaBuilding className='text-xl' />
            Empresa
          </button>
        </div>
      </div>
    </div>
  );
}
RegisterType.propTypes = {
  handleNext: PropTypes.func.isRequired,
  setType: PropTypes.func.isRequired,
};

export default RegisterType;

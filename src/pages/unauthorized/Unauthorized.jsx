import { Link } from 'react-router-dom';

const Unauthorized = () => {
  return (
    <div
      className='flex flex-col items-center justify-center h-screen text-center'
    >
      <h3 className='text-2xl font-bold text-[#FFAE00] mt-10'>Unauthorized</h3>

      <p 
        className='mt-5 text-xl font-semibold text-gray-400'
      >Lo sentimos, no tienes permisos para acceder a esta página.</p>

      <p
        className='mt-5 text-lg font-semibold text-gray-400'
      >
        Por favor, inicia sesión con una cuenta que tenga los permisos
        necesarios.
      </p>

      <p
        className='mt-5 text-lg font-semibold text-gray-400'
      >
        Si crees que esto es un error, por favor, contacta al administrador.
      </p>

      <button 
        className='mt-5 bg-[#FFAE00] text-white px-4 py-2 rounded-lg hover:bg-[#FFD464] transition-colors'
      >

      
      <Link
        to='/'
        className='flex items-center text-white'
      >
        Regresar al inicio
      </Link>
      </button>
    </div>
  );
};

export default Unauthorized;

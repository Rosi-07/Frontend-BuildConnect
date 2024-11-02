import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { FaHome, FaProjectDiagram, FaInfoCircle, FaEnvelope, FaSignInAlt, FaUserCircle,  } from 'react-icons/fa'; 
import { Link } from 'react-router-dom';
import useAuthStore from '../../hooks/auth/useAuth';
import useLogout from '../../hooks/auth/useLogout';

const Header = () => {
  const { auth } = useAuthStore();
  const [nav, setNav] = useState(false);
  const logout = useLogout();

  const handleNav = () => {
    setNav(!nav);
  };

  const handleScrollToFooter = () => {
    const footerElement = document.getElementById('footer');
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 1, text: 'Inicio', icon: <FaHome />, route: '/' },
    { id: 2, text: 'Proyectos', icon: <FaProjectDiagram />, route: '/marketplace' },
    { id: 3, text: 'Sobre Nosotros', icon: <FaInfoCircle />, route: '#' },
    { id: 4, text: 'Contáctanos', icon: <FaEnvelope />, route: '/contactUs' },
  ];

  return (
    <div className='flex items-center justify-between h-24 px-4 mx-auto text-white bg-[#00455E]'>
      <h1 className='w-full text-xl font-bold text-[#FFAE00]'>
        <img src="/logo.png" className="h-12" alt="Logo" />
      </h1>

      <ul className='hidden md:flex whitespace-nowrap'>
      {/* Mapeo de los elementos de navegación */}
      {navItems.map(item => (
        <li
          key={item.id}
          className='flex items-center p-4 hover:bg-[#FFAE00] rounded-xl m-2 cursor-pointer duration-300 hover:text-gray-600'
        >
          <Link
            to={item.route}
            className='flex items-center text-white'
            onClick={item.id === 3 ? handleScrollToFooter : undefined}
          >
            <span className='mr-2'>{item.icon}</span>
            {item.text}
          </Link>
        </li>
      ))}

<li className='flex items-center p-4 hover:bg-[#FFAE00] rounded-xl m-2 cursor-pointer duration-300 hover:text-gray-600'>
          {auth?.user?.role ? (

            auth?.user?.role === 'owner' ? (
            <Link to='/userProfile' className='flex items-center text-white'>
              <FaUserCircle className='mr-2' />
              <span>¡Hola! {auth?.user?.name ?? auth?.company?.name}</span>
            </Link>) : (
            <Link to='/companyProfile' className='flex items-center text-white'>
              <FaUserCircle className='mr-2' />
              <span>¡Hola! {auth?.user?.name ?? auth?.company?.name}</span>
            </Link>
            )
          ) : (
            <Link to='/login' className='flex items-center text-white'>
              <FaSignInAlt className='mr-2' />
              Iniciar Sesión
            </Link>
        )}
      </li>

      {
        auth?.user?.role || auth?.company?.role ? (
          <li className='flex items-center p-4 m-2 duration-300 cursor-pointer hover:bg-red-400 rounded-xl hover:text-gray-600'>
            <div onClick={logout} className='flex items-center text-white'>
              <FaSignInAlt className='mr-2' />
              Cerrar Sesión
            </div>
          </li>
        ) : null
      }


    </ul>

      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#00455E] ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        <h1 className='w-full text-3xl font-bold text-[#FFAE00] m-4'>Build Connect</h1>
        {navItems.map(item => (
          <li key={item.id} className='flex items-center p-4 border-b rounded-xl hover:bg-[#FFAE00] duration-300 hover:text-black cursor-pointer border-gray-600'>
            <Link to={item.route}
             className="flex items-center text-white"
             onClick={item.id === 3 ? handleScrollToFooter : undefined}
             >
              <span className='mr-2'>{item.icon}</span>
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;

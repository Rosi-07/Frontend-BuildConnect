import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { FaHome, FaProjectDiagram, FaInfoCircle, FaEnvelope, FaSignInAlt } from 'react-icons/fa'; 
import { Link } from 'react-router-dom';

const Header = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, text: 'Inicio', icon: <FaHome />, route: '/home' },
    { id: 2, text: 'Proyectos', icon: <FaProjectDiagram />, route: '/projects' },
    { id: 3, text: 'Sobre Nosotros', icon: <FaInfoCircle />, route: '/about' },
    { id: 4, text: 'Contáctanos', icon: <FaEnvelope />, route: '/contact' },
    { id: 5, text: 'Iniciar Sesión', icon: <FaSignInAlt />, route: '/login' },
  ];

  return (
    <div className='flex items-center justify-between h-24 px-4 mx-auto text-white bg-[#00455E]'>
      <h1 className='w-full text-xl font-bold text-[#FFAE00]'>
        <img src="/logo.png" className="h-12" alt="Logo" />
      </h1>

      <ul className='hidden md:flex whitespace-nowrap'>
        {navItems.map(item => (
          <li key={item.id} className='flex items-center p-4 hover:bg-[#FFAE00] rounded-xl m-2 cursor-pointer duration-300 hover:text-gray-600'>
            <Link to={item.route} className="flex items-center text-white">
              <span className='mr-2'>{item.icon}</span>
              {item.text}
            </Link>
          </li>
        ))}
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
            <Link to={item.route} className="flex items-center text-white">
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

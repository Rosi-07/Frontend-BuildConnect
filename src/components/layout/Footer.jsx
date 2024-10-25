import React from 'react';
import { Email, Map, WhatsApp, Computer, DesignServices } from '@mui/icons-material';


function Footer() {



  return (
  

<footer id='footer' className=" bg-[#00455E]">
    <div className="w-full max-w-screen-xl p-4 py-6 mx-auto lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mt-8 mb-6 md:mb-0">
                  {/* <img src="/BC-logo.png" className="h-[6rem]" alt="Logo" /> */}
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Build Connect</span>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-8 sm:gap-6 sm:grid-cols-2">
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Contacto</h2>
                  <ul className="font-medium text-gray-500 dark:text-gray-400">
                      <li className="mb-4">
                      <WhatsApp />
                          <a className='ml-2'>+(506) 1234-6578</a>
                      </li>
                      <li className="mb-4">
                        <Email/>
                          <a className='ml-2'>buildconnect@gmail.com</a>
                      </li>
        
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Sobre nosotros</h2>
                  <ul className="font-medium text-gray-500 dark:text-gray-400">
                      <li className="mb-4">
                      <Computer/>
                        <a className='ml-2'>Intermediarios virtuales</a>
                      </li>
                      <li >
                      <DesignServices/>
                        <a href="#servicios" className='ml-2'>Nuestros servicios</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-[#00455E] lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a className="hover:underline">BuildConnect</a>. Todos los derechos reservados.
          </span>
      </div>
    </div>
</footer>
  );
}

export default Footer;

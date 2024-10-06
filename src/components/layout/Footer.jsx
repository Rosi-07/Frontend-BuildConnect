import React from 'react';
import { Email, Map, WhatsApp, Computer, DesignServices } from '@mui/icons-material';


function Footer() {



  return (
  

<footer id='footer' class=" bg-[#00455E]">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0 mt-8">
                  {/* <img src="/BC-logo.png" class="h-[6rem]" alt="Logo" /> */}
                  <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Build Connect</span>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2 mt-8">
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Contacto</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                      <WhatsApp />
                          <a className='ml-2'>+(506) 1234-6578</a>
                      </li>
                      <li class="mb-4">
                        <Email/>
                          <a className='ml-2'>buildconnect@gmail.com</a>
                      </li>
        
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Sobre nosotros</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
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
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-[#00455E] lg:my-8" />
      <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a class="hover:underline">BuildConnect</a>. All Rights Reserved.
          </span>
      </div>
    </div>
</footer>
  );
}

export default Footer;

import React from 'react'

function CompanyProfile() {

  return (
   <div className="flex flex-col items-center h-screen p-4 bg-blue-50">
      <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-md">
        <div className="flex items-center mb-6">
          <img
            src="/AMConstructora.png" 
            alt="Logo de la Empresa"
            className="w-16 h-16 mr-4"
          />
          <div>
            <h1 className="text-3xl font-bold">Nombre de la Empresa SA corp</h1>
            <p className="text-gray-500">Ubicación, principal de Operación</p>
            <p className="text-gray-500">Año de fundación</p>
          </div>
        </div>
        <h2 className="mb-4 text-2xl font-semibold">Descripción de la empresa</h2>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget
          dignissim dolor. Vivamus finibus pellentesque scelerisque. Vivamus
          nulla tortor, dignissim sed sagittis eget, facilisis nec velit. Aenean
          vitae laoreet odio. In sodales consectetur dui at gravida. Vestibulum
          vitae ante commodo ligula mattis aliquet vel eget lectus.
        </p>

        <h3 className="text-xl font-bold">Misión</h3>
        <p className="mb-4">
          Etiam eu dui ligula. Vivamus rhoncus congue eros, et porttitor nunc
          tempor non. Aliquam sapien justo, elementum nec eros sed, interdum
          consequat urna. Sed fermentum velit eu congue iaculis.
        </p>

        <h3 className="text-xl font-bold">Visión</h3>
        <p>
          Aliquam sapien justo, elementum nec eros sed, interdum consequat urna.
          Sed fermentum velit eu congue iaculis. Etiam eu dui ligula. Vivamus
          rhoncus congue eros, et porttitor nunc tempor non.
        </p>
      </div>
    </div>
  )
}

export default CompanyProfile
const CompanyDetails = ({ company }) => {

  return (
    <div className='flex flex-col items-center min-w-full p-4 bg-blue-50'>
      <div className='w-full max-w-4xl p-8 bg-white rounded-lg shadow-md'>
        <div className='flex items-center mb-6'>
          <img
            src='/AMConstructora.png'
            alt='Logo de la Empresa'
            className='w-16 h-16 mr-4'
          />
          <div>
            <h1 className='text-3xl font-bold'>{company.Company.name}</h1>
            <p className='text-gray-500'>
              Ubicación: {company.Company.address.province},{' '}
              {company.Company.address.canton},{' '}
              {company.Company.address.district}
            </p>
          </div>
        </div>

        <h2 className='mb-4 text-2xl font-semibold'>
          Descripción de la empresa
        </h2>
        <p className='mb-4'>{company.Company.description}</p>

        <h3 className='text-xl font-bold'>Misión</h3>
        <p className='mb-4'>{company.Company.mission}</p>

        <h3 className='text-xl font-bold'>Visión</h3>
        <p className='mb-4'>{company.Company.vision}</p>

        <h3 className='text-xl font-bold'>Contactos</h3>
        <div className='mb-4'>
          <h4 className='font-semibold'>Correos Electrónicos:</h4>
          <ul className='pl-5 list-disc'>
            {company?.contacts?.emails.map((email, index) => (
              <li key={index}>{email}</li>
            ))}
          </ul>
        </div>

        <div className='mb-4'>
          <h4 className='font-semibold'>Números de Contacto:</h4>
          <ul className='pl-5 list-disc'>
            {company.contacts?.numbers.map((number, index) => (
              <li key={index}>{number}</li>
            ))}
          </ul>
        </div>

        <h3 className='text-xl font-bold'>Comentarios</h3>
        <div className='mb-4'>
          {company?.Company.Comments.map((comment) => (
            <div key={comment.id} className='mb-4'>
              <div
                className='flex items-center p-4 bg-gray-100 rounded-lg shadow-md'
                key={comment.id}
              >
                <h4 className='mr-4 font-semibold text-gray-800'>
                  {comment?.Owner?.name} {comment?.Owner?.lastname}{' '}
                </h4>
                <p 
                  className='text-gray-600 line-clamp-2'
                >{comment?.text}</p>
              </div>
            </div>
          ))}

          {company.Company.Comments.length === 0 && <p>No hay comentarios</p>}
        </div>
      </div>
    </div>
  );
};

export default CompanyDetails;

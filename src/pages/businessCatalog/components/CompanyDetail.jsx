import React from 'react';
import { PinDropOutlined, Email, Phone } from '@mui/icons-material';
import Rating from '@mui/material/Rating';

const CompanyDetail = ({ company }) => {
  return (
    <div className='w-full h-full p-6 bg-gray-100 border border-gray-300 rounded-md shadow-lg'>
      <div
        className='flex items-center justify-between mb-4'
        data-testid='property-details'
      >
        <h2 className='mb-4 text-3xl font-bold tracking-wide text-gray-800'>
          {company?.Company?.name}
        </h2>
      </div>

      <p className='mb-10 text-lg text-gray-700'>
        {company?.Company?.description}
      </p>

      <div className='p-4 mb-6 bg-white border border-gray-300 rounded-md shadow-inner'>
        <h4 className='mb-4 text-2xl font-semibold text-center text-gray-800'>
          Vision
        </h4>
        <div className='mb-5 space-y-2'>
          <p className='text-lg'>{company?.Company?.vision}</p>
        </div>

        <h4 className='mb-4 text-2xl font-semibold text-center text-gray-800'>
          Misión
        </h4>
        <div className='space-y-2'>
          <p className='text-lg'>{company?.Company?.mission}</p>
        </div>
      </div>

      <div className='p-4 mb-6 bg-white border border-gray-300 rounded-md shadow-inner'>
        <h4 className='mb-4 text-2xl font-semibold text-center text-gray-800'>
          <PinDropOutlined className='mr-2 text-gray-600' />
          Dirección
        </h4>
        <div className='space-y-2'>
          <p className='text-lg'>
            <strong className='text-gray-700'>Cantón:</strong>{' '}
            {company?.Company?.address?.canton}
          </p>
          <p className='text-lg'>
            <strong className='text-gray-700'>Distrito:</strong>{' '}
            {company?.Company?.address?.district}
          </p>
          <p className='text-lg'>
            <strong className='text-gray-700'>Provincia:</strong>{' '}
            {company?.Company?.address?.province}
          </p>
          <p className='text-lg italic text-gray-600'>
            <strong className='text-gray-700'>Detalles:</strong>{' '}
            {company?.Company?.address?.streetDetails}
          </p>
        </div>
      </div>

      <div className='p-4 mb-6 border border-gray-300 rounded-md bg-gray-50'>
        <h3 className='mb-3 text-xl font-semibold tracking-wide text-gray-700'>
          Calificación
        </h3>
        <div className='flex items-center'>
          <Rating
            name='rating'
            precision={0.1}
            value={company?.Company?.rating ?? 0}
            size='large'
            readOnly
          />
        </div>
      </div>

      <div className='p-4 bg-white border border-gray-300 rounded-md'>
        <h3 className='mb-3 text-xl font-semibold tracking-wide text-gray-700'>
          Para más información, contactanos:
        </h3>
        <div className='flex flex-col items-start mb-4 text-gray-600'>
          <h4 className='mb-2 mr-2 text-gray-600'>- Correos:</h4>
          {company?.contacts?.emails?.map((email, index) => (
            <div key={index} className='flex items-center'>
              <Email className='mr-2 text-gray-600' />
              <p>{email}</p>
            </div>
          ))}
        </div>
        <div className='flex flex-col items-start text-gray-600'>
          <h4 className='mb-2 mr-2 text-gray-600'>- Teléfonos:</h4>
          {company?.contacts?.numbers?.map((phone, index) => (
            <div key={index} className='flex items-center text-gray-600'>
              <Phone className='mr-2 text-gray-600' />
              <p>{phone}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyDetail;

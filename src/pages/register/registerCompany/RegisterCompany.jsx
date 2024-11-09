import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../../../database/api';
import { useSnackbar } from 'notistack';

function RegisterCompany() {
  const snackbar = useSnackbar();

  const [user, setUser] = useState({
    email: '',
    password: '',
    role: 'company',
    contacts: {
      emails: [],
      numbers: [],
    },
  });

  const [contacts, setContacts] = useState({
    emails: [''],
    numbers: [''],
  });

  const [Company, setCompany] = useState({
    legalId: '',
    name: '',
    description: '',
    mission: '',
    vision: '',
  });

  const [address, setAddress] = useState({
    province: '',
    canton: '',
    district: '',
    streetDetails: '',
  });

  const [pricing, setPricing] = useState({
    plan: 'free',
    billingCycle: 'monthly',
    billingDate: '',
  });

  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [errors, setErrors] = useState([]);

  const handleUserChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleCompanyChange = (e) => {
    const { name, value } = e.target;
    setCompany({ ...Company, [name]: value });
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddress({ ...address, [name]: value });
  };

  const handleContactsChange = (index, e) => {
    const { name, value } = e.target;

    if (name === 'emails') {
      const newEmails = [...contacts.emails];
      newEmails[index] = value;
      setContacts({ ...contacts, emails: newEmails });
    }

    if (name === 'numbers') {
      const newNumbers = [...contacts.numbers];
      newNumbers[index] = value;
      setContacts({ ...contacts, numbers: newNumbers });
    }
  };

  const addEmailInput = () => {
    setContacts({ ...contacts, emails: [...contacts.emails, ''] });
  };

  const addNumberInput = () => {
    setContacts({ ...contacts, numbers: [...contacts.numbers, ''] });
  };

  const deleteEmailInput = (index) => {
    const newEmails = [...contacts.emails];
    newEmails.splice(index, 1);
    setContacts({ ...contacts, emails: newEmails });
  };

  const deleteNumberInput = (index) => {
    const newNumbers = [...contacts.numbers];
    newNumbers.splice(index, 1);
    setContacts({ ...contacts, numbers: newNumbers });
  };

  const comparePasswords = () => {
    if (user.password !== confirmPassword) {
      setErrors([
        { message: 'Las contraseñas no coinciden', field: 'cpassword' },
      ]);
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);

    if (!comparePasswords()) return;

    const newUser = {
      ...user,
      contacts: {
        emails: contacts.emails,
        numbers: contacts.numbers,
      },
      Company: {
        ...Company,
        address,
        pricing,
      },
    };

    try {
      const response = await api.post('/auth/register/companies', newUser);

      if (response.status === 201) {
        setErrorMsg('');
        snackbar.enqueueSnackbar('Usuario registrado correctamente', {
          variant: 'success',
        });
        /* navigate(from, { replace: true }); */
      } else if (response.status === 400) {
        const data = await response.json();
        setErrors(data.validations || []);
      } else {
        setErrorMsg('Ocurrió un error al registrar el usuario.');
      }
    } catch (error) {
      console.log(error);
      snackbar.enqueueSnackbar('Ocurrió un error al registrar el usuario.', {
        variant: 'error',
      });
/*       setErrorMsg('Ocurrió un error al registrar el usuario.');
 */    }
  };

  return (
    <div className='max-w-4xl mx-auto font-[sans-serif] p-6'>
      <div className='mb-10 text-center'>
        <h4 className='inline-block pb-2 mt-3 text-xl font-medium text-gray-800 border-b-2 border-gray-300'>
          Regístrate
        </h4>
      </div>
      <form onSubmit={handleSubmit}>
        <div className='grid grid-cols-1 gap-8 sm:grid-cols-2'>
          <div>
            <div className='flex justify-center'>
              <input
                name='legalId'
                type='text'
                value={Company.legalId}
                onChange={handleCompanyChange}
                className='bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all'
                placeholder='Identificación Tributaria'
              />
            </div>
            <div className='flex justify-center'>
              <input
                name='name'
                type='text'
                value={Company.name}
                onChange={handleCompanyChange}
                className='bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all'
                placeholder='Nombre de la compañía'
              />
            </div>
            <div className='flex justify-center'>
              <input
                name='description'
                type='text'
                value={Company.description}
                onChange={handleCompanyChange}
                className='bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all'
                placeholder='Descripción de la compañía'
              />
            </div>
            <div className='flex justify-center'>
              <input
                name='mission'
                type='text'
                value={Company.mission}
                onChange={handleCompanyChange}
                className='bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all'
                placeholder='Misión de la compañía'
              />
            </div>
            <div className='flex justify-center'>
              <input
                name='vision'
                type='text'
                value={Company.vision}
                onChange={handleCompanyChange}
                className='bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all'
                placeholder='Visión de la compañía'
              />
            </div>
            <div className='flex justify-center'>
              <input
                name='province'
                type='text'
                value={address.province}
                onChange={handleAddressChange}
                className='bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all'
                placeholder='Provincia'
              />
            </div>
            <div >
              {contacts.emails.map((email, index) => (
                <div key={index} >
                  <input
                    name='emails'
                    type='email'
                    className='bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all'
                    placeholder='Correo Electrónico'
                    value={email}
                    onChange={(e) => handleContactsChange(index, e)}
                  />
                  <button
                    type='button'
                    onClick={() => deleteEmailInput(index)}
                    className='ml-5 text-sm text-red-500'
                  >
                    Eliminar
                  </button>
                </div>
              ))}
              <button
                type='button'
                onClick={addEmailInput}
                className='ml-5 text-sm text-blue-600'
              >
                Agregar correo
              </button>
            </div>
          </div>
  
          <div>
            <div className='flex justify-center'>
              <input
                name='canton'
                type='text'
                value={address.canton}
                onChange={handleAddressChange}
                className='bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all'
                placeholder='Cantón'
              />
            </div>
            <div className='flex justify-center'>
              <input
                name='district'
                type='text'
                value={address.district}
                onChange={handleAddressChange}
                className='bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all'
                placeholder='Distrito'
              />
            </div>
            <div className='flex justify-center'>
              <input
                name='streetDetails'
                type='text'
                value={address.streetDetails}
                onChange={handleAddressChange}
                className='bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all'
                placeholder='Detalles de la dirección'
              />
            </div>
            <div className='flex justify-center'>
              <input
                name='email'
                type='email'
                value={user.email}
                onChange={handleUserChange}
                className='bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all'
                placeholder='Correo Electrónico'
              />
            </div>
            <div className='flex justify-center'>
              <input
                name='password'
                type='password'
                value={user.password}
                onChange={handleUserChange}
                className='bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all'
                placeholder='Contraseña'
              />
            </div>
            <div className='flex justify-center'>
              <input
                name='cpassword'
                type='password'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className='bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all'
                placeholder='Confirmar contraseña'
              />
            </div>
            <div> 
              {contacts.numbers.map((number, index) => (
                <div key={index} >
                  <input
                    name='numbers'
                    type='text'
                    className='bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all'
                    placeholder='Número de Teléfono'
                    value={number}
                    onChange={(e) => handleContactsChange(index, e)}
                  />
                  <button
                    type='button'
                    onClick={() => deleteNumberInput(index)}
                    className='ml-5 text-sm text-red-500'
                  >
                    Eliminar
                  </button>
                </div>
              ))}    
              <button
                type='button'
                onClick={addNumberInput}
              className='ml-5 text-sm text-blue-600'
              >
                Agregar número
              </button>
            </div>
          </div>
        </div>
  
        <div className='flex justify-center mt-6'>
          <button
            type='submit'
            className='py-3.5 px-7 text-sm font-semibold tracking-wider rounded-md text-white bg-[#00455E] hover:bg-[#00455eb6] items-center'
          >
            Registrar Cuenta
          </button>
        </div>
      </form>
    </div>
  );
  
}

export default RegisterCompany;

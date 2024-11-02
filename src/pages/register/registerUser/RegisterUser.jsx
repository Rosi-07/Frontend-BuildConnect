import { useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../../database/api';

const RegisterUser = () => {
  /* const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || { pathname: '/' }; */

  const [user, setUser] = useState({
    email: "",
    password: "",
    role: "owner",
    contacts: {
      emails: [],
      numbers: [],
    },
  });

  const [Owner, setOwner] = useState({
    name: '',
    lastname: '',
    lastname2: '',
  });

  const [contacts, setContacts] = useState({
    emails: [],
    numbers: [],
  });

  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [errors, setErrors] = useState([]);

  const handleUserChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleOwnerChange = (e) => {
    const { name, value } = e.target;
    setOwner({ ...Owner, [name]: value });
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

    console.log(user.password, confirmPassword);

    if (!comparePasswords()) return;

    const newUser = {
      email: user.email,
      password: user.password,
      role: user.role,
      contacts: {
        emails: contacts.emails,
        numbers: contacts.numbers,
      },
      Owner: Owner,
     };

    console.log(newUser);

    try {
      const response = await api.post("auth/register/owners", newUser);

      if (response.status === 201) {
        setErrorMsg("");
        /* navigate(from, { replace: true }); */
      } else if (response.status === 400) {
        const data = await response.json();
        setErrors(data.validations || []);
      } else {
        setErrorMsg("Ocurrió un error al registrar el usuario.");
      }
    } catch (error) {
      console.log(error);
      setErrorMsg("Error al conectar con el servidor. Inténtalo más tarde.");
    }
  };

  return (
    <>
      <div className='max-w-4xl mx-auto font-[sans-serif] p-6'>
        <div className='mb-10 text-center'>
          <h4 className='inline-block pb-2 mt-6 text-xl font-medium text-gray-800 border-b-2 border-gray-300'>
            Regístrate
          </h4>
        </div>

        <form onSubmit={handleSubmit}>
          <div className='grid gap-8 sm:grid-cols-2'>
            <div>
              <input
                name='name'
                type='text'
                className='bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all'
                placeholder='Nombre'
                value={Owner.name}
                onChange={handleOwnerChange}
              />
              {errors.find((error) => error.field === 'name') && (
                <p className='text-sm text-red-500'>
                  {errors.find((error) => error.field === 'name').message}
                </p>
              )}
            </div>

            <div>
              <input
                name='lastname'
                type='text'
                className='bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all'
                placeholder='Primer Apellido'
                value={user.lastname}
                onChange={handleOwnerChange}
              />
              {errors.find((error) => error.field === 'lastname') && (
                <p className='text-sm text-red-500'>
                  {errors.find((error) => error.field === 'lastname').message}
                </p>
              )}
            </div>
            <div>
              <input
                name='lastname2'
                type='text'
                className='bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all'
                placeholder='Segundo Apellido'
                value={user.lastname2}
                onChange={handleOwnerChange}
              />
              {errors.find((error) => error.field === 'lastname2') && (
                <p className='text-sm text-red-500'>
                  {errors.find((error) => error.field === 'lastname2').message}
                </p>
              )}
            </div>
            <div>
              <input
                name='email'
                type='email'
                className='bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all'
                placeholder='Correo Electrónico'
                value={user.email}
                onChange={handleUserChange}
              />
              {errors.find((error) => error.field === 'email') && (
                <p className='text-sm text-red-500'>
                  {errors.find((error) => error.field === 'email').message}
                </p>
              )}
            </div>
            <div>
              <input
                name='password'
                type='password'
                className='bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all'
                placeholder='Contraseña'
                value={user.password}
                onChange={handleUserChange}
              />
              {errors.find((error) => error.field === 'password') && (
                <p className='text-sm text-red-500'>
                  {errors.find((error) => error.field === 'password').message}
                </p>
              )}
            </div>
            <div>
              <input
                name='cpassword'
                type='password'
                className='bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all'
                placeholder='Confirmar contraseña'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {errors.find((error) => error.field === 'cpassword') && (
                <p className='text-sm text-red-500'>
                  {errors.find((error) => error.field === 'cpassword').message}
                </p>
              )}
            </div>
          </div>

          <div>
            <h2 className='text-lg font-semibold text-gray-800'>
              Infomacion de Contacto
            </h2>
            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2'>
              <div>
                <h2 className='text-lg font-semibold text-gray-800'>
                  Correos Electrónicos
                </h2>
                {contacts.emails.map((email, index) => (
                  <div key={index}>
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
                      onClick={() => {
                        deleteEmailInput(index);
                      }}
                      className='text-sm text-red-500'
                    >
                      Eliminar
                    </button>
                  </div>
                ))}
                <button
                  type='button'
                  onClick={addEmailInput}
                  className='text-sm text-blue-600'
                >
                  Agregar correo
                </button>
              </div>
              <div>
                <h2 className='text-lg font-semibold text-gray-800'>
                  Números de Teléfono
                </h2>
                {contacts.numbers.map((number, index) => (
                  <div key={index}>
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
                      onClick={() => {
                        deleteNumberInput(index);
                      }}
                      className='text-sm text-red-500'
                    >
                      Eliminar
                    </button>
                  </div>
                ))}
                <button
                  type='button'
                  onClick={addNumberInput}
                  className='text-sm text-blue-600'
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
              Aceptar
            </button>
          </div>
          {errorMsg && (
            <p className='mt-4 text-center text-red-500'>{errorMsg}</p>
          )}
        </form>

        <div className='flex justify-center mt-6'>
          <Link to='/login' className='text-sm text-blue-600'>
            ¿Ya tienes cuenta? Inicia sesión aquí
          </Link>
        </div>
      </div>
    </>
  );
};

export default RegisterUser;

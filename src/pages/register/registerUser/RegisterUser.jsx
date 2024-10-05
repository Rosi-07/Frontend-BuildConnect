import { Link, useNavigate } from "react-router-dom";

const RegisterUser = () => {
  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate('/userProfile'); 
  };
    
  return (
    <>
    <div className="max-w-4xl mx-auto font-[sans-serif] p-6 ">
      <div className="mb-10 text-center">
        <h4 className="inline-block pb-2 mt-6 text-xl font-medium text-gray-800 border-b-2 border-gray-300">
          Regístrate
        </h4>
      </div>
      <form onSubmit={handleSubmit}> {/* Añadir onSubmit aquí */}
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <input name="name" type="text" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Nombre" />
          </div>
          <div>
            <input name="lastname1" type="text" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Primer Apellido" />
          </div>
          <div>
            <input name="lastname2" type="text" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Segundo Apellido" />
          </div>
          <div>
            <input name="number" type="number" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Teléfono" />
          </div>
          <div>
            <input name="email" type="email" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Correo Electrónico" />
          </div>
          <div>
            <input name="password" type="password" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Contraseña" />
          </div>
          <div>
            <input name="cpassword" type="password" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Confirmar contraseña" />
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <button type="submit" className="py-3.5 px-7 text-sm font-semibold tracking-wider rounded-md text-white bg-[#00455E] hover:bg-[#00455eb6] items-center">
            Aceptar
          </button>
        </div>
      </form>
    </div>
  </>
  );
};

export default RegisterUser;


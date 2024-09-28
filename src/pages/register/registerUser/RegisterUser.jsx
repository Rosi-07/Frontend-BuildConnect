import { Link } from "react-router-dom";

const RegisterUser = () => {
  return (
    <>
          <div class="max-w-4xl mx-auto font-[sans-serif] p-6 ">
          <div class="text-center mb-10">
        <h4 class="text-gray-800 text-xl font-medium mt-6 pb-2 border-b-2 border-gray-300 inline-block">
          Regístrate
        </h4>
      </div>
      <form>
        <div class="grid sm:grid-cols-2 gap-8">
          <div>
            <input name="name" type="text" class="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Nombre" />
          </div>
          <div>
            <input name="lastname1" type="text" class="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Primer Apellido" />
          </div>
          <div>
            <input name="lastname2" type="text" class="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Segundo Apellido" />
          </div>
          <div>
            <input name="number" type="number" class="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Teléfono" />
          </div>
          <div>
            <input name="email" type="email" class="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Correo Electrónico" />
          </div>
          <div>
            <input name="password" type="password" class="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Contraseña" />
          </div>
          <div>
            <input name="cpassword" type="password" class="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Confirmar contraseña" />
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <button type="button" class="py-3.5 px-7 text-sm font-semibold tracking-wider rounded-md text-white bg-[#00455E] hover:bg-[#00455eb6] items-center">
            Aceptar
          </button>
        </div>
      </form>
    </div>
    </>
  );
};

export default RegisterUser;


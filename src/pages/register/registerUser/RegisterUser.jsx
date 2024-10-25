import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import api from "../../../database/api"; 

const RegisterUser = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || { pathname: "/" };

  const [user, setUser] = useState({
    name: "",
    lastName: "",
    lastName2: "",
    email: "",
    phone: { mobile: "" },
    password: "",
  });

  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [errors, setErrors] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      setUser((prev) => ({
        ...prev,
        phone: { mobile: value },
      }));
    } else {
      setUser((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const comparePasswords = () => {
    if (user.password !== confirmPassword) {
      setErrors([{ message: "Las contraseñas no coinciden", field: "cpassword" }]);
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]); 

    if (!comparePasswords()) return;

    try {
      const response = await api.post("auth/register-user", user);

      if (response.status === 201) {
        setErrorMsg("");
        navigate(from, { replace: true });
      } else if (response.status === 400) {
        const data = await response.json();
        setErrors(data.validations || []);
      } else {
        setErrorMsg("Ocurrió un error al registrar el usuario.");
      }
    } catch (error) {
      setErrorMsg("Error al conectar con el servidor. Inténtalo más tarde.");
    }
  };

  return (
    <>
      <div className="max-w-4xl mx-auto font-[sans-serif] p-6">
        <div className="mb-10 text-center">
          <h4 className="inline-block pb-2 mt-6 text-xl font-medium text-gray-800 border-b-2 border-gray-300">
            Regístrate
          </h4>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <input
                name="name"
                type="text"
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                placeholder="Nombre"
                value={user.name}
                onChange={handleInputChange}
              />
              {errors.find((error) => error.field === "name") && (
                <p className="text-sm text-red-500">
                  {errors.find((error) => error.field === "name").message}
                </p>
              )}
            </div>
            <div>
              <input
                name="lastName"
                type="text"
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                placeholder="Primer Apellido"
                value={user.lastName}
                onChange={handleInputChange}
              />
              {errors.find((error) => error.field === "lastName") && (
                <p className="text-sm text-red-500">
                  {errors.find((error) => error.field === "lastName").message}
                </p>
              )}
            </div>
            <div>
              <input
                name="lastName2"
                type="text"
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                placeholder="Segundo Apellido"
                value={user.lastName2}
                onChange={handleInputChange}
              />
              {errors.find((error) => error.field === "lastName2") && (
                <p className="text-sm text-red-500">
                  {errors.find((error) => error.field === "lastName2").message}
                </p>
              )}
            </div>
            <div>
              <input
                name="phone"
                type="number"
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                placeholder="Teléfono"
                value={user.phone.mobile}
                onChange={handleInputChange}
              />
              {errors.find((error) => error.field === "phoneNumbers") && (
                <p className="text-sm text-red-500">
                  {errors.find((error) => error.field === "phoneNumbers").message}
                </p>
              )}
            </div>
            <div>
              <input
                name="email"
                type="email"
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                placeholder="Correo Electrónico"
                value={user.email}
                onChange={handleInputChange}
              />
              {errors.find((error) => error.field === "email") && (
                <p className="text-sm text-red-500">
                  {errors.find((error) => error.field === "email").message}
                </p>
              )}
            </div>
            <div>
              <input
                name="password"
                type="password"
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                placeholder="Contraseña"
                value={user.password}
                onChange={handleInputChange}
              />
              {errors.find((error) => error.field === "password") && (
                <p className="text-sm text-red-500">
                  {errors.find((error) => error.field === "password").message}
                </p>
              )}
            </div>
            <div>
              <input
                name="cpassword"
                type="password"
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                placeholder="Confirmar contraseña"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {errors.find((error) => error.field === "cpassword") && (
                <p className="text-sm text-red-500">
                  {errors.find((error) => error.field === "cpassword").message}
                </p>
              )}
            </div>
          </div>

          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="py-3.5 px-7 text-sm font-semibold tracking-wider rounded-md text-white bg-[#00455E] hover:bg-[#00455eb6] items-center"
            >
              Aceptar
            </button>
          </div>
          {errorMsg && <p className="mt-4 text-center text-red-500">{errorMsg}</p>}
        </form>

        <div className="flex justify-center mt-6">
          <Link to="/login" className="text-sm text-blue-600">
            ¿Ya tienes cuenta? Inicia sesión aquí
          </Link>
        </div>
      </div>
    </>
  );
};

export default RegisterUser;

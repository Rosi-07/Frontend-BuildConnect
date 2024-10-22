import { useRef, useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useSnackbar } from "notistack";
import useAuthStore from "../../hooks/auth/useAuth";
import useLocalStorage from "../../hooks/useLocalStorage";
import api from "../../database/api";

const Login = () => {
  const setAuth = useAuthStore((state) => state.setAuth);
  const persist = useAuthStore((state) => state.persist);
  const setPersist = useAuthStore((state) => state.setPersist);

  const { enqueueSnackbar } = useSnackbar();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || { pathname: "/" };

  const emailRef = useRef();

  const [email, setEmail] = useLocalStorage("correo", "");
  const [password, setPassword] = useState("");

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  useEffect(() => {
    localStorage.setItem("persist", persist);
  }, [persist]); 

  const togglePersist = () => {
    setPersist(!persist);
  };

  const login = async (email, password) => {
    return await api.post(
      "/auth/login",
      { email, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
  };

  

  const navigateToPage = () => {
    navigate(from);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await login(email, password);
      enqueueSnackbar("Inicio de sesión exitoso", { variant: "success" });

      console.log(response.data);

      
      if(response.data.user){

      setAuth({
        user: response.data.user,
        accessToken: response.data.accessToken,
      });
      }else{
        setAuth({
          company: response.data.company,
          accessToken: response.data.accessToken,
        });
      }

    
      navigateToPage();
    } catch (error) {
      enqueueSnackbar(
        `${error.response?.data?.message || "Error al iniciar sesión"}`,
        { variant: "error" }
      );
    }
  };

  return (
    <div className="font-[sans-serif]">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="grid md:grid-cols-2 items-center gap-4 max-md:gap-8 max-w-6xl max-md:max-w-lg w-full p-4 m-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md">
          <div className="w-full px-4 py-4 md:max-w-md">
            <form onSubmit={handleSubmit}>
              <div className="mb-12">
                <h3 className="text-3xl font-extrabold text-gray-800">Iniciar Sesión</h3>
                <Link to="/register" className="text-sm text-black">
                  <p className="mt-4 text-sm text-gray-800">
                    ¿Aún no tienes cuenta?{" "}
                    <span className="ml-1 font-semibold text-blue-600 hover:underline whitespace-nowrap">
                      Regístrate aquí
                    </span>
                  </p>
                </Link>
              </div>
              <div>
                <div className="relative flex items-center">
                  <input
                    name="email"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    ref={emailRef}
                    className="w-full px-2 py-3 text-sm text-gray-800 border-b border-gray-300 outline-none focus:border-blue-600"
                    placeholder="Usuario"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#bbb"
                    stroke="#bbb"
                    className="w-[18px] h-[18px] absolute right-2"
                    viewBox="0 0 682.667 682.667"
                  >
                    <g>
                      <path fill="none" strokeMiterlimit="10" strokeWidth="40" d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"></path>
                      <path d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"></path>
                    </g>
                  </svg>
                </div>
              </div>

              <div className="mt-8">
                <div className="relative flex items-center">
                  <input
                    name="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full px-2 py-3 text-sm text-gray-800 border-b border-gray-300 outline-none focus:border-blue-600"
                    placeholder="Contraseña"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#bbb"
                    stroke="#bbb"
                    className="w-[18px] h-[18px] absolute right-2 cursor-pointer"
                    viewBox="0 0 128 128"
                  >
                    <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"></path>
                  </svg>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded shrink-0 focus:ring-blue-500"
                    checked={persist}
                    onChange={togglePersist}
                  />
                  <label htmlFor="remember-me" className="block ml-3 text-sm text-gray-800">
                    Recordar
                  </label>
                </div>
                <div>
                  <a className="text-sm font-semibold text-blue-600 hover:underline">
                    ¿Olvidaste tu contraseña?
                  </a>
                </div>
              </div>

              <div className="mt-12">
                <button
                  type="submit"
                  className="w-full shadow-xl py-2.5 px-4 text-sm tracking-wide rounded-md text-white bg-[#00455E] hover:bg-[#00455ec7] focus:outline-none"
                >
                  Iniciar Sesión
                </button>
              </div>
            </form>
          </div>

          <div className="p-8 md:h-full bg-slate-100 rounded-xl lg:p-12">
          <img src="https://readymadeui.com/signin-image.webp" className="object-contain w-full h-full" alt="login-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

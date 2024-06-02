import React from 'react';
import hombreEnCarrito from '../assets/hombre_en_carrito.png'; // Asegúrate de que la ruta es correcta
import logo from '../assets/pawns_blanca.png'; // Importa el logo de tu carpeta assets
import { Link } from 'react-router-dom';
function LoginForm() {
  return (
    <div className="flex min-h-screen bg-white"> {/* Fondo general blanco */}
      {/* Div for the image and logo */}
      <div className="w-1/2 relative" style={{ backgroundColor: "#AD8786" }}>
        <img src={logo} alt="Logo" className="absolute top-2 left-2" style={{ width: '180px', height: '180px' }} />
        <div className="h-full bg-no-repeat bg-center" style={{ backgroundImage: `url(${hombreEnCarrito})`, backgroundSize: "65% auto" }}>
          {/* Empty if only displaying the image */}
        </div>
      </div>

      {/* Div for the login form */}
      <div className="w-1/2 flex items-center justify-center">
        <div className="bg-white px-16 py-10 w-full max-w-2xl"> {/* Increased max-width of the form container */}
          <div className="text-3xl font-bold mb-6 text-left">Bienvenido/a</div>
          <hr className="border-gray-300 my-11" />
          <form>
            <div className="mb-5 text-left">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email:
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full px-4 py-5 text-sm border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 shadow-sm rounded-sm"
                placeholder="xxx@gmail.com"
              />
            </div>
            <div className="mb-6 text-left">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Contraseña:
              </label>
              <input
                type="password"
                id="password"
                className="mt-1 block w-full px-4 py-5 text-sm border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 shadow-sm rounded-sm"
                placeholder="************"
              />
            </div>
            <div className="mb-8">
              <button
                className="text-white font-bold py-5 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                type="submit"
                style={{ backgroundColor: "#AD8786" }}
              >
                Ingresar
              </button>
            </div>
            <div className="text-center">
            <span className="text-sm text-gray-700">¿No estás registrado? </span>
            <Link to="/signup" className="inline-block align-baseline font-medium text-sm text-yellow-600 ">
                Regístrate ahora
            </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;

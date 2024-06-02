import React from 'react';
import { Link } from 'react-router-dom';
import mujerConTableta from '../assets/mujer_en_pagina.png';  // Asegúrate de que la ruta es correcta
import logo from '../assets/pawns_blanca.png'; // Asegúrate de que la ruta del logo es correcta

function SignUp() {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Div for the image with logo */}
      <div className="w-1/2 relative" style={{ backgroundColor: "#5E1414" }}> {/* Updated background color */}
        <img src={logo} alt="Logo" className="absolute top-2 left-2" style={{ width: '180px', height: '180px' }} />
        <div className="h-full bg-no-repeat bg-center bg-cover" style={{ backgroundImage: `url(${mujerConTableta})`, backgroundSize: "65% auto" }}>
          {/* Empty if only displaying the image */}
        </div>
      </div>

      {/* Div for the registration form */}
      <div className="w-1/2 flex items-center justify-center relative">
        <Link to="/login" className="absolute top-9 left-9 text-gray-500 hover:text-gray-700" style={{ fontSize: '20px' }}> {/* Adjust top and left values */}
          &larr; Regresar
        </Link>
        <div className="bg-white p-12 w-full max-w-lg">
          <h1 className="text-2xl font-bold mb-2 text-left">Regístrate ahora</h1>
          <p className="mb-4 text-sm text-gray-400 text-left">¡Regístrate y empieza a negociar!</p> {/* Additional text */}
          <hr className="border-gray-300 my-8" />
          <form>
            <div className="mb-4 text-left">
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                Nombre completo:
              </label>
              <input
                type="text"
                id="fullName"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500"
                placeholder="Paulo Coelho"
              />
            </div>
            <div className="mb-4 text-left">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email:
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500"
                placeholder="xxx@email.com"
              />
            </div>
            <div className="mb-4 text-left">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Contraseña:
              </label>
              <input
                type="password"
                id="password"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500"
                placeholder="************"
              />
            </div>
            <div className="mb-4 text-left">
              <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                Género:
              </label>
              <select
                id="gender"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500"
              >
                <option>Masculino</option>
                <option>Femenino</option>
                <option>Otro</option>
              </select>
            </div>
            <div className="mb-6 text-left">
              <label htmlFor="birthdate" className="block text-sm font-medium text-gray-700">
                Fecha de nacimiento:
              </label>
              <input
                type="date"
                id="birthdate"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500"
                defaultValue="2024-12-12"
              />
            </div>
            <button
              className="w-full py-3 px-4 bg-5E1414 text-white rounded-md hover:bg-red-700 focus:outline-none"
              type="submit"
              style={{ backgroundColor: "#5E1414" }}  // Updated button background color
            >
              Continua
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

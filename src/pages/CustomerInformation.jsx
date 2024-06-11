import React from 'react';
import { Link } from 'react-router-dom';
import profileImage from '../assets/usuario_incognito.png'; 
import useAuthUser from 'react-auth-kit/hooks/useAuthUser';

const RedStripe = () => {
  return (
    <div className="bg-red-500 h-10 w-full flex justify-between items-center px-4">
      <span className="text-white text-xs">Mi Perfil</span>
      <button className="bg-red-500 text-white py-1 px-4 text-xs">Inicio = Mi Perfil</button>
    </div>
  );
};

function AccountInfo() {

  const authUser = useAuthUser();
  console.log(authUser);


  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50">
      {/* Red Stripe at the top */}
      <RedStripe />
      
      {/* Main content */}
      <div className="flex flex-row w-full max-w-6xl bg-white mt-6 rounded-lg shadow-lg p-8">
        {/* Image on the left */}
        <div className="w-1/3 flex flex-col items-center">
          <img src={profileImage} alt="Profile" className="rounded-full w-3/4 mb-4" />
          <div className="w-full flex flex-col items-start">
            <Link to="/CustomerInformation" className="w-full mb-2">
              <button className="w-full text-left py-2 px-4 border rounded-md bg-gray-100 hover:bg-gray-200 focus:outline-none">
                Información de tu Cuenta
              </button>
            </Link>
            <Link to="/MetodoPago" className="w-full">
              <button className="w-full text-left py-2 px-4 border rounded-md bg-gray-100 hover:bg-gray-200 focus:outline-none">
                Métodos de Pago
              </button>
            </Link>
          </div>
        </div>
        
        {/* Form on the right */}
        <div className="w-2/3 pl-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Información de tu cuenta</h2>
          <form>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                  Nombres <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500"
                  value={authUser ? authUser.name : ''}
                  
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                  Apellidos <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500"
                />
              </div>
              <div className="col-span-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Correo electrónico <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500"
                  value={authUser ? authUser.email : ''}
                />
              </div>
              <div>
                <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                  Género
                </label>
                <input
                  type="text"
                  id="gender"
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="birthdate" className="block text-sm font-medium text-gray-700">
                  Fecha de Nacimiento
                </label>
                <input
                  type="date"
                  id="birthdate"
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500"
                />
              </div>
              <div className="col-span-2">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Número de teléfono <span className="text-gray-500">(Opcional)</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500"
                />
              </div>
              <div className="col-span-2">
                <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700">
                  Contraseña actual
                </label>
                <input
                  type="password"
                  id="currentPassword"
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500"
                />
              </div>
              <div className="col-span-2">
                <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">
                  Nueva contraseña
                </label>
                <input
                  type="password"
                  id="newPassword"
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500"
                />
              </div>
              <div className="col-span-2 flex justify-end">
                <button
                  type="submit"
                  className="py-3 px-6 bg-red-500 text-white rounded-md hover:bg-red-700 focus:outline-none"
                >
                  Guardar Cambios
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AccountInfo;

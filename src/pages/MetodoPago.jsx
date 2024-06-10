import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import profileImage from '../assets/usuario_incognito.png'; // Asegúrate de que la ruta es correcta

const RedStripe = () => {
  return (
    <div className="bg-red-500 h-10 w-full flex justify-between items-center px-4">
      <span className="text-white text-xs">Mi Perfil</span>
      <button className="bg-red-500 text-white py-1 px-4 text-xs">Inicio = Mi Perfil</button>
    </div>
  );
};

function PaymentMethods() {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50">
      {/* Red Stripe at the top */}
      <RedStripe />
      
      {/* Main content */}
      <div className="flex flex-row w-full max-w-6xl bg-white mt-6 rounded-lg shadow-lg p-8">
        {/* Sidebar with profile image and navigation */}
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
          <h2 className="text-2xl font-bold mb-6 text-center">Métodos de Pago</h2>
          <p className="mb-4 text-sm text-gray-600 text-center">
            Seleccione el método de pago de su preferencia para gestionar salidas y entradas de dinero.
          </p>
          <form>
            {/* Tarjeta de Débito/Crédito */}
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <input 
                  type="radio" 
                  name="paymentMethod" 
                  value="card" 
                  className="mr-2" 
                  onClick={() => setSelectedPaymentMethod('card')} 
                />
                <label className="block text-sm font-medium text-gray-700">
                  Tarjeta Débito / Crédito
                </label>
              </div>
              {selectedPaymentMethod === 'card' && (
                <div>
                  <input
                    type="text"
                    placeholder="Número de tarjeta"
                    className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500"
                  />
                  <div className="flex space-x-4 mt-2">
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="block w-1/3 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500"
                    />
                    <input
                      type="text"
                      placeholder="CVC"
                      className="block w-1/3 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* PSE */}
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <input 
                  type="radio" 
                  name="paymentMethod" 
                  value="pse" 
                  className="mr-2" 
                  onClick={() => setSelectedPaymentMethod('pse')} 
                />
                <label className="block text-sm font-medium text-gray-700">
                  PSE
                </label>
              </div>
              {selectedPaymentMethod === 'pse' && (
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="bank" className="block text-sm font-medium text-gray-700">
                      Banco
                    </label>
                    <select
                      id="bank"
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500"
                    >
                      {/* Opciones de banco */}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="personType" className="block text-sm font-medium text-gray-700">
                      Tipo de persona
                    </label>
                    <select
                        id="personType"
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500"
                      >
                        <option value="natural">Natural</option>
                        <option value="juridica">Jurídica</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="idType" className="block text-sm font-medium text-gray-700">
                        Tipo
                      </label>
                      <select
                        id="idType"
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500"
                      >
                        <option value="cc">Cédula de Ciudadanía (CC)</option>
                        <option value="ti">Tarjeta de Identidad (TI)</option>
                        <option value="ce">Cédula de Extranjería (CE)</option>
                        <option value="pasaporte">Pasaporte</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="documentNumber" className="block text-sm font-medium text-gray-700">
                        Número de documento
                      </label>
                      <input
                        type="text"
                        id="documentNumber"
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500"
                      />
                    </div>
                  </div>
                )}
            </div>
            {/* Nequi */}
            <div className="mb-4">
                <div className="flex items-center mb-2">
                  <input 
                    type="radio" 
                    name="paymentMethod" 
                    value="nequi" 
                    className="mr-2" 
                    onClick={() => setSelectedPaymentMethod('nequi')}
                  />
                  <label className="block text-sm font-medium text-gray-700">
                    Nequi
                  </label>
                </div>
                {selectedPaymentMethod === 'nequi' && (
                  <div>
                    <label htmlFor="nequiPhone" className="block text-sm font-medium text-gray-700">
                      Número de teléfono
                    </label>
                    <input
                      type="text"
                      id="nequiPhone"
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500"
                      placeholder="Ingrese su número de teléfono"
                    />
                  </div>
                )}
              </div>
            <div className="flex justify-end mt-4">
              <button
                type="submit"
                className="py-3 px-6 bg-red-500 text-white rounded-md hover:bg-red-700 focus:outline-none"
              >
                Guardar Cambios
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PaymentMethods;


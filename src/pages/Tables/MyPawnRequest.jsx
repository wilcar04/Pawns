import React, { useState } from 'react';
import { Outlet } from "react-router-dom";

const RedStripe = () => {
  return (
    <div className="bg-rojo h-10 w-full flex justify-between items-center px-4">
      <span className="text-white text-xs ">Mis solicitudes de empeño</span>
      <button className="bg-rojo text-white py-1 px-4 text-xs">Inicio = Mis solicitudes de empeños</button>
    </div>
  );
};

const compras = [
  { id: 1, producto: 'Productzxvzx', precioDado: 100000,   total: 200000, estado: 'pendiente' },
  { id: 2, producto: 'Pasfawfasfasfas', precioDado: 100000,   total: 100000, estado: 'aprobado' },
  { id: 3, producto: 'dfhdfhdfhdhdfh', precioDado: 100000,   total: 100000, estado: 'pendiente' },
  { id: 4, producto: 'dfhdfhdfgwefqw', precioDado: 100000, total: 100000, estado: 'aprobado' }
];

const TablaMisCompras = () => {
  return (
    <table className="mx-32 max-w-full">
      <thead>
        <tr className=''>
          <th className="py-1 bg-gray-200 text-left pl-3">Producto</th>
          <th className="py-1 bg-gray-200">Precio Dado</th>
          <th className="py-1 bg-gray-200">Precio final</th>  
          <th className="py-1 bg-gray-200">Estado</th>
          <th className="py-1 bg-gray-200 w-20"></th>
        </tr>
      </thead>
      <tbody>
        {compras.map(compra => (
          <tr>
            <td className="py-4 bg-gray-100">
              <div className='flex items-center'>
                <img src='src/assets/logo.png' className='w-7 ml-5' alt='Logo' />
                <span className='mt-3 ml-5'>{compra.producto}</span>
              </div>
            </td>
            <td className="py-4 bg-gray-100">{compra.precioDado.toLocaleString()}</td>
            <td className="py-4 bg-gray-100">{compra.total.toLocaleString()}</td>
            <td className="py-4 bg-gray-100">{compra.estado}</td>
            <td className="py-4 bg-gray-100">
              {compra.estado === 'aprobado' && (
                <>
                  <button>
                    <img src='src/assets/accept.png' className='w-5 ml-15' alt='accept' />
                  </button>
                  <button>
                    <img src='src/assets/cancel.png' className='w-5 ml-15' alt='cancel' />
                  </button>
                  
                </>
              )}
              {compra.estado === 'pendiente' && (
                <>
                  
                </>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

function SaveChangesButton() {
  return (
    <div className='flex justify-between items-center'>
      <div className="flex items-center">
      </div>
      <button className='bg-rojo h-10 rounded w-40 text-white text-xs mt-40 mr-20'>Guardar cambios</button>
    </div>
  );
}

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
 
      <RedStripe />
      <div className="text-center mt-20 text-base sm:text-3xl lg:text-xl font-bold mb-20">
        Mis solicitudes de empeño
      </div>
      <TablaMisCompras />
      <main className="flex-1">
        <SaveChangesButton></SaveChangesButton>
        <Outlet />
      </main>
   
    </div>
  );
}

export default function MyPawnRequest() {
  return (
    <Layout />
  );
}

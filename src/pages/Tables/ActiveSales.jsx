import React from 'react';
import { Outlet } from "react-router-dom";


const RedStripe = () => {
  return (
    <div className="bg-rojo h-10 w-full flex justify-between items-center px-4">
      <span className="text-white text-xs ">Mis ventas</span>
      <button className="bg-rojo text-white py-1 px-4 text-xs">Inicio = Mis ventas</button>
    </div>
  );
};

const empenos = [
  { id: 1, producto: 'Productzxvzx', Precio: 10000},
  { id: 2, producto: 'Pasfawfasfasfas',Precio: 10000},
  { id: 3, producto: 'dfhdfhdfhdhdfh',Precio: 100000},
  { id: 4, producto: 'dfhdfhdfgwefqw', Precio:100000}
];

const TablaMisVentas = () => {
  return (
    <table className="mx-32 max-w-full">
      <thead>
        <tr className=''>
          <th className="py-1 bg-gray-200 text-left pl-3">Producto</th>
          <th className="py-1 bg-gray-200">Precio</th>
          <th className="py-1 bg-gray-200">Detalles del producto</th>

        </tr>
      </thead>
      <tbody>
        {empenos.map(empeno => (
          <tr>
            <td className="py-4 bg-gray-100">
              <div className='flex items-center'>
                <img src='src/assets/logo.png' className='w-7 ml-5' alt='Logo' />
                <span className='mt-3 ml-5'>{empeno.producto}</span>
              </div>
            </td>
            <td className="py-4 bg-gray-100">{empeno.Precio.toLocaleString()}</td>
            <td className="py-4 bg-gray-100">Ver mas</td>
          </tr>
          
        ))}
      </tbody>
    </table>
  );
};


function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
     
      <RedStripe />
      <div className="text-center mt-20 text-base sm:text-3xl lg:text-xl font-bold">
        Mis ventas
      </div>
      <TablaMisVentas />

      <main className="flex-1">
        <Outlet />
      </main>
     
    </div>
  );
}

export default function ActiveSales() {
  return (
    <Layout />
  );
}
